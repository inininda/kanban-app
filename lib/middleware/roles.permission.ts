// list of protected routes
export enum ROLES {
    ANYBODY = "ANYBODY",
    USER = "USER",
    GUEST = "GUEST"
}

export interface EndpointPermission {
    method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
    url: string;
    allowedRoles: ROLES[]
}

export const permissions: EndpointPermission[] =
    [
        {
            method: "GET",
            url: "/dashboard",
            allowedRoles: [ROLES.USER],
        },
        {
            method: "GET",
            url: "/sign-in",
            allowedRoles: [ROLES.GUEST],
        },
        {
            method: "GET",
            url: "/sign-up",
            allowedRoles: [ROLES.GUEST],
        }

    ]