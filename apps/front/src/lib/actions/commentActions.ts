"use server";

import { print } from "graphql";
import { authFetchGraphQL, fetchGraphQL } from "../fetchGraphQL";
import { CREATE_COMMENT_MUTATION, GET_POST_COMMENTS } from "../gqlQueries";
import { CommentEntity } from "../types/modelTypes";
import { CreateCommentFormState } from "../types/formState";
import { commentFormSchema } from "../zodSchemas/commentFormSchema";

export async function getPostComments({
    postId,
    skip,
    take,
}: {
    postId: number;
    skip?: number;
    take?: number;
}) {
    const data = await fetchGraphQL(print(GET_POST_COMMENTS), {
        postId,
        skip,
        take,
    });
    return {
        comments: data.getPostComments as CommentEntity[],
        count: data.postCommentCount as number,
    };
}

export async function saveComment(state: CreateCommentFormState, formData: FormData):
 Promise<CreateCommentFormState> {

    const validatedFields = commentFormSchema.safeParse(
        Object.fromEntries(formData.entries())
    )

    if (!validatedFields.success) {
       data: Object.fromEntries(formData.entries()),
       errors: validatedFields.error.flatten().fieldErrors,
    }

    const data = await authFetchGraphQL(print(CREATE_COMMENT_MUTATION),{
        input: {
            ...validatedFields.data,
        } 
    });

    if (data) return {
        message: "Sucess! Your comment has been posted.", ok: true, open: true
    }

    return {
        message: "Oops! Something went wrong. Please try again later.",
        ok: false,
        open: true,
        data: Object.fromEntries(formData.entries()),
    }
}