import { permissions, EndpointPermission, ROLES } from "./roles.permission";

export class RBAC {
    /**
     * @returns the list of all permissions
     */
    getEndpointPermissions(): EndpointPermission[] {
        return permissions
    }

    /**
     * 
     * @param endpoint (method + url)
     * @returns the permission for the endpoint or null if not found
     */
    getEndpointPermission(endpoint: string): EndpointPermission | null {
        // extract method + endpoint
        const [method, url] = endpoint?.split(" ")
        if (!method || !url) return null
        return permissions.find((permission) => permission.method === method.toUpperCase() && permission.url?.toLowerCase() === url.toLowerCase()) || null
    }

    /**
     * 
     * @param role user role 
     * @param endpoint the request endpoint (method + url)
     * @returns boolean whether user can access the endpoint or not
     */
    validate(role: ROLES, endpoint: string): boolean {
        // get the permission
        const permission = this.getEndpointPermission(endpoint)

        return !!(permission?.allowedRoles.includes(ROLES.ANYBODY) || permission?.allowedRoles.includes(role) || !permission)
    }


}