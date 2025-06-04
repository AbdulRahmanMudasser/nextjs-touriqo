"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { ComponentType } from "react";

// HOC (Higher Order Component) to enforce authentication on the wrapped component
const requireAuth = <P extends object>(Component: ComponentType<P>) => {
    return function AuthenticatedComponent(props: P) {
        const { token } = useAuth();
        const router = useRouter();

        useEffect(() => {
            // Redirect to login page if no token is found
            if (!token) router.push("/auth/login");
        }, [token, router]);  // Add router to the dependency array to avoid the warning

        // Render the wrapped component if authenticated, otherwise return null
        return token ? <Component {...props} /> : null;
    };
};

export default requireAuth;
