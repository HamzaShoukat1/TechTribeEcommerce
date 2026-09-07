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
(()=>{
    const e = new Error("Cannot find module '../../public/images/carousle/Image.png'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../public/images/carousle/Rectangle 25.png'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
        img: carousalImg1,
        num: '01',
        category: 'Bed Room',
        title: 'Inner Peace'
    },
    {
        id: 2,
        img: carousalImg2,
        num: '02',
        category: 'Living Room',
        title: 'Nordic Vibe'
    },
    {
        id: 3,
        img: carousalImg1,
        num: '03',
        category: 'Dining Room',
        title: 'Cozy Space'
    },
    {
        id: 4,
        img: carousalImg2,
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
        className: "relative w-full max-w-[785px]",
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
                className: "!overflow-visible",
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
                                    lineNumber: 93,
                                    columnNumber: 17
                                }, this),
                                isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "\n                      absolute\n                      bottom-[21px]\n                      left-[21px]\n                      w-[238px]\n                      h-[116px]\n                      bg-white/90\n                      flex\n                      flex-col\n                      justify-center\n                      px-[29px]\n                    ",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[14px] text-[#616161]",
                                                    children: slide.num
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/RoomCarousal.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-[24px] h-[1px] bg-[#616161]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/RoomCarousal.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[14px] text-[#616161]",
                                                    children: slide.category
                                                }, void 0, false, {
                                                    fileName: "[project]/app/Components/RoomCarousal.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/Components/RoomCarousal.tsx",
                                            lineNumber: 119,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "\n                        font-poppins\n                        font-semibold\n                        text-[24px]\n                        text-[#333333]\n                        mt-1\n                      ",
                                            children: slide.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/Components/RoomCarousal.tsx",
                                            lineNumber: 133,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/Components/RoomCarousal.tsx",
                                    lineNumber: 104,
                                    columnNumber: 19
                                }, this),
                                isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "\n                      absolute\n                      bottom-[21px]\n                      left-[238px]\n                      w-[43px]\n                      h-[43px]\n                      bg-[#B88E2F]\n                      text-white\n                      text-[25px]\n                      flex\n                      items-center\n                      justify-center\n                      z-10\n                      cursor-pointer\n                    ",
                                    children: "→"
                                }, void 0, false, {
                                    fileName: "[project]/app/Components/RoomCarousal.tsx",
                                    lineNumber: 153,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/Components/RoomCarousal.tsx",
                            lineNumber: 81,
                            columnNumber: 15
                        }, this)
                    }, slide.id, false, {
                        fileName: "[project]/app/Components/RoomCarousal.tsx",
                        lineNumber: 76,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/Components/RoomCarousal.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>swiperRef.current?.slideNext(),
                className: "\n          absolute\n          right-[0px]\n          top-[240px]\n          z-30\n          w-[48px]\n          h-[48px]\n          rounded-full\n          bg-white\n          shadow-md\n          flex\n          items-center\n          justify-center\n          text-[#B88E2F]\n          text-[28px]\n          cursor-pointer\n          hover:scale-105\n          transition\n        ",
                children: "→"
            }, void 0, false, {
                fileName: "[project]/app/Components/RoomCarousal.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "\n          flex\n          items-center\n          gap-[12px]\n          mt-[24px]\n        ",
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
                            className: "\n                    w-[8px]\n                    h-[8px]\n                    rounded-full\n                    bg-[#B88E2F]\n                  "
                        }, void 0, false, {
                            fileName: "[project]/app/Components/RoomCarousal.tsx",
                            lineNumber: 252,
                            columnNumber: 17
                        }, this)
                    }, slide.id, false, {
                        fileName: "[project]/app/Components/RoomCarousal.tsx",
                        lineNumber: 231,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/Components/RoomCarousal.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/Components/RoomCarousal.tsx",
        lineNumber: 53,
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
]);

//# sourceMappingURL=app_Components_RoomCarousal_tsx_0kq8u6n._.js.map