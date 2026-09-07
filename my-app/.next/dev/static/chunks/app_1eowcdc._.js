(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/Components/RoomCarousal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RoomCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$public$2f$images$2f$carousle$2f$Image$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$public$2f$images$2f$carousle$2f$Image$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/public/images/carousle/Image.png.mjs { IMAGE => "[project]/app/public/images/carousle/Image.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$public$2f$images$2f$carousle$2f$Rectangle__25$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$public$2f$images$2f$carousle$2f$Rectangle__25$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/app/public/images/carousle/Rectangle 25.png.mjs { IMAGE => "[project]/app/public/images/carousle/Rectangle 25.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const slides = [
    {
        id: 1,
        img: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$public$2f$images$2f$carousle$2f$Image$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$public$2f$images$2f$carousle$2f$Image$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        num: '01',
        category: 'Bed Room',
        title: 'Inner Peace'
    },
    {
        id: 2,
        img: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$public$2f$images$2f$carousle$2f$Rectangle__25$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$public$2f$images$2f$carousle$2f$Rectangle__25$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        num: '02',
        category: 'Living Room',
        title: 'Nordic Vibe'
    },
    {
        id: 3,
        img: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$public$2f$images$2f$carousle$2f$Image$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$public$2f$images$2f$carousle$2f$Image$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        num: '03',
        category: 'Dining Room',
        title: 'Cozy Space'
    },
    {
        id: 4,
        img: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$public$2f$images$2f$carousle$2f$Rectangle__25$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$public$2f$images$2f$carousle$2f$Rectangle__25$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        num: '04',
        category: 'Bed Room',
        title: 'Modern Space'
    }
];
function RoomCarousel() {
    _s();
    const swiperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-[1211px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full max-w-[712px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                    slidesPerView: "auto",
                    spaceBetween: 21,
                    loop: true,
                    onSwiper: (swiper)=>{
                        swiperRef.current = swiper;
                    },
                    onSlideChange: (swiper)=>{
                        setActiveIndex(swiper.realIndex);
                    },
                    className: "overflow-visible flex mx-auto",
                    children: slides.map((slide, index)=>{
                        const isActive = index === activeIndex;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                            className: "!w-[362px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `
                    relative
                    w-[362px]
                    transition-all
                    duration-500
                    ${isActive ? 'h-[520px]' : 'h-[435px]'}
                  `,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: slide.img,
                                        alt: slide.title,
                                        fill: true,
                                        className: "object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Components/RoomCarousal.tsx",
                                        lineNumber: 81,
                                        columnNumber: 19
                                    }, this),
                                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "\n                        absolute\n                        left-[565px]\n                        top-[2807px]\n                        w-[238px]\n                        h-[116px]\n                        bg-white/90\n                        flex\n                        flex-col\n                        justify-center\n                      ",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[14px] text-[#616161]",
                                                        children: slide.num
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Components/RoomCarousal.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-[24px] h-[1px] bg-[#616161]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Components/RoomCarousal.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[14px] text-[#616161]",
                                                        children: slide.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/Components/RoomCarousal.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/Components/RoomCarousal.tsx",
                                                lineNumber: 103,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "\n                          font-poppins\n                          font-semibold\n                          text-[24px]\n                          text-[#333333]\n                          mt-1\n                        ",
                                                children: slide.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/Components/RoomCarousal.tsx",
                                                lineNumber: 113,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Components/RoomCarousal.tsx",
                                        lineNumber: 90,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Components/RoomCarousal.tsx",
                                lineNumber: 71,
                                columnNumber: 17
                            }, this)
                        }, slide.id, false, {
                            fileName: "[project]/app/Components/RoomCarousal.tsx",
                            lineNumber: 70,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/app/Components/RoomCarousal.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>swiperRef.current?.slideNext(),
                    className: "\n            absolute\n            right-[0px]\n            top-[240px]\n            z-30\n            w-[48px]\n            h-[48px]\n            rounded-full\n            bg-white\n            shadow-md\n            flex\n            items-center\n            justify-center\n            text-[#B88E2F]\n            text-[28px]\n            cursor-pointer\n            hover:scale-105\n            transition\n          ",
                    children: "→"
                }, void 0, false, {
                    fileName: "[project]/app/Components/RoomCarousal.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-[12px] mt-[24px]",
                    children: slides.map((slide, index)=>{
                        const isActive = index === activeIndex;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>swiperRef.current?.slideToLoop(index),
                            className: `
                  flex
                  items-center
                  justify-center
                  rounded-full
                  cursor-pointer
                  transition-all
                  duration-300
                  ${isActive ? 'w-[24px] h-[24px] border border-[#B88E2F] bg-white' : 'w-[8px] h-[8px] bg-[#D9D9D9]'}
                `,
                            children: isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "\n                      w-[8px]\n                      h-[8px]\n                      rounded-full\n                      bg-[#B88E2F]\n                    "
                            }, void 0, false, {
                                fileName: "[project]/app/Components/RoomCarousal.tsx",
                                lineNumber: 186,
                                columnNumber: 19
                            }, this)
                        }, slide.id, false, {
                            fileName: "[project]/app/Components/RoomCarousal.tsx",
                            lineNumber: 167,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/app/Components/RoomCarousal.tsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/Components/RoomCarousal.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/Components/RoomCarousal.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(RoomCarousel, "ImKwUn1GA4XVtN+qcn1VQe6iMmI=");
_c = RoomCarousel;
var _c;
__turbopack_context__.k.register(_c, "RoomCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/public/images/carousle/Image.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/Image.3jb_lvnx9ublb.png");}),
"[project]/app/public/images/carousle/Image.png.mjs { IMAGE => \"[project]/app/public/images/carousle/Image.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$public$2f$images$2f$carousle$2f$Image$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/public/images/carousle/Image.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$public$2f$images$2f$carousle$2f$Image$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 404,
    height: 582,
    blurWidth: 6,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAArklEQVR42h2MyQqCUABF3/9vmrAomsigSeiV2KIyUuth48IkyIWhC3/j9GxxuXAv5wjXdZFLyXjQp2kYVGt1DN0iCAI67S6thh6rdSo6pmkiHo8nztZlOJ4yGk3p9YZYloWIogjvpFjZG6R0mEzmuiUijmPKUymF73k4tq2JBeIaXkiShEsYEno+5/2O9VKrvmlKURRkWUb6eXFTR/zjHlEOeZ7/j/fd0cRMKw/8AHPKmMJKGn/PAAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/public/images/carousle/Rectangle 25.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/Rectangle 25.2hb5m-yvxhw5y.png");}),
"[project]/app/public/images/carousle/Rectangle 25.png.mjs { IMAGE => \"[project]/app/public/images/carousle/Rectangle 25.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$public$2f$images$2f$carousle$2f$Rectangle__25$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/public/images/carousle/Rectangle 25.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$public$2f$images$2f$carousle$2f$Rectangle__25$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 372,
    height: 486,
    blurWidth: 6,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAtElEQVR42iWMyYrCQABE+/8PA3Mf5jJzFA+C4EEEUUFwwbgriUvQbk3SdjpGQVyeUQ91qar3xEYqokOMPabvHGxCnKQId+Gy3Sl2YUCgNUl65nK9IeT+RWhCHSEDSXJKud4fiDArtTHoOGbpe5ij/QxSSYIowliLyQ4m858umWo0dJi7c9ZLl3GthDfootQe0et1aNSrjJw2zdwP5d8vWqU8Yjab4Psr1t4Up/hH4/+bfqXAE/0irj+eDMO/AAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_1eowcdc._.js.map