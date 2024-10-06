/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/about',
                destination: '/frontend/about',
            },
            {
                source: '/calendar-schedule',
                destination: '/frontend/calendar-schedule',
            },
            {
                source: '/course-selection',
                destination: '/frontend/course-selection',
            },
            // {
            //     source: '/invite-friends',
            //     destination: '/frontend/invite-friends',
            // },
            {
                source: '/login',
                destination: '/frontend/login',
            },
            {
                source: '/signin',
                destination: '/frontend/signin',
            },
            {
                source: '/signup',
                destination: '/frontend/signup',
            },
            {
                source: '/chat',
                destination: '/frontend/chat',
            },
            {
                source: '/dashboard',
                destination: '/frontend/dashboard',
            },
            {
                source: '/virtual-table',
                destination: '/frontend/virtual-table',
            },
            {
                source: '/popular-table',
                destination: '/frontend/popular-table',
            },
            // Dynamic route for course details
            {
                source: '/course-details/:id',
                destination: '/frontend/course-details/:id',
            },
        ];
    },
};

export default nextConfig;
