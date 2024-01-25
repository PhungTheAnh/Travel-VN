export const paths = {
    home:{
        index: "",
        //
        meta: "Home | Travel VN",
        metaSlug: (slug: string) => `${slug} | Travel VN`,
    },
    address:{
        index: "/address",
        slug: (slug: string) => `/address/${slug}`,
        // meta
        meta: "Địa điểm | Travel VN",
        metaSlug: (slug: string) => `${slug} | Travel VN`,
        // description
        description: "Du lịch Việt Nam"
    },
    tours:{
        index: "/tours",
        slug: (slug: string) => `/tours/${slug}`,
        // meta
        meta: "Tours | Travel VN",
        metaSlug: (slug: string) => `${slug} | Travel VN`,
        // description
        description: "Du lịch Việt Nam"
    },
    posts:{
        index: "/posts",
        slug: (slug: string) => `/posts/${slug}`,
        // meta
        meta: "Bài viết | Travel VN",
        metaSlug: (slug: string) => `${slug} | Travel VN`,
        // description
        description: "Du lịch Việt Nam"
    },
    about:{
        index: "",
        //
        meta: "Về chúng tôi | Travel VN",
        metaSlug: (slug: string) => `${slug} | Travel VN`,
    },
    contact:{
        index: "",
        //
        meta: "Liên hệ | Travel VN",
        metaSlug: (slug: string) => `${slug} | Travel VN`,
    },
}