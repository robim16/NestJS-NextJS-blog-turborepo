import { faker } from '@faker-js/faker';
import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

function generateSlug(title) {
    return title
        .toLowerCase()
        .trim()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');
}

async function main() {
    const users = Array.from({ length: 10 }).map(() => ({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        bio: faker.lorem.sentence(),
        avatar: faker.image.avatar(),
    }));

    await prisma.user.createMany({ data: users });

    const posts = Array.from({ length: 20 }).map(() => ({
        title: faker.lorem.sentence(),
        slug: generateSlug(faker.lorem.sentence()),
        content: faker.lorem.paragraphs(3),
        thumbnail: faker.image.urlLoremFlickr(),
        authorId: faker.number.int({ min: 1, max: 10 }),
        published: true,
    }));

    await Promise.all(
        posts.map(async (post) =>
            prisma.post.create({
                data: {
                    ...post,
                    comments: {
                        createMany: {
                            data: Array.from({ length: 20 }).map(() => ({
                                content: faker.lorem.sentence(),
                                authorId: faker.number.int({ min: 1, max: 10 }),
                            })),
                        },
                    },
                },
            })
        )
    );

    console.log('seeding complete');
}

main()
    .then(() => prisma.$disconnect())
    .catch((e) => {
        console.error(e);
        prisma.$disconnect();
        process.exit(1);
    });
