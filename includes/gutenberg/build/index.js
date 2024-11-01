(() => {
	"use strict";
	const e = window.wp.hooks, t = window.wp.element, a = (window.wp.richText, window.wp.blockEditor), l = window.wp.components, c = window.wp.compose, r = window.wp.i18n, n = {};
	n.wraiterEdit = (0, t.createElement)("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "68.000000pt",
		height: "68.000000pt",
		viewBox: "0 0 68.000000 68.000000"
	}, (0, t.createElement)("g", {
		transform: "translate(0.000000,68.000000) scale(0.100000,-0.100000)",
		fill: "#000000",
		stroke: "none"
	}, (0, t.createElement)("path", {d: "M0 340 l0 -340 340 0 340 0 0 340 0 340 -340 0 -340 0 0 -340z m331 239 l38 -30 11 -37 c5 -20 10 -54 10 -74 l0 -37 -52 24 -53 25 -55 -1 c-30 0 -80 -8 -110 -18 l-55 -18 -3 25 c-2 14 -1 40 3 58 l6 34 38 32 c21 18 54 38 72 45 l34 12 39 -5 39 -5 38 -30z m209 19 c24 -13 53 -35 64 -50 l20 -28 4 -60 4 -61 -54 -54 -55 -55 -46 0 c-25 0 -49 4 -52 10 -3 5 3 27 14 49 11 21 23 56 27 78 l6 38 -25 78 -25 77 37 0 37 0 44 -22z m-282 -260 l-22 -43 1 -80 0 -80 16 -38 16 -38 -15 -6 c-27 -10 -85 5 -120 32 -19 14 -43 44 -54 65 -35 68 -23 125 37 182 36 34 67 47 121 47 l42 1 -22 -42z m94 -95 l43 -18 70 0 70 0 43 18 c23 9 45 17 47 17 3 0 5 -16 5 -35 0 -53 -26 -107 -67 -140 l-37 -29 -52 -1 -52 0 -43 31 -44 32 -24 46 -23 45 6 26 c4 14 8 25 11 25 3 0 24 -8 47 -17z"})), (0, t.createElement)("g", {
		transform: "translate(0.000000,68.000000) scale(0.100000,-0.100000)",
		fill: "#fefefe",
		stroke: "none"
	}, (0, t.createElement)("path", {d: "M172 618 c-18 -6 -52 -28 -74 -48 l-42 -37 -4 -66 -4 -67 10 0 c5 0 38 9 72 20 34 11 81 20 104 20 l41 0 53 -25 c30 -14 58 -25 63 -25 12 0 11 86 -1 132 l-11 37 -39 31 -39 31 -48 4 c-26 2 -63 -1 -81 -7z"}), (0, t.createElement)("path", {d: "M410 623 c0 -5 12 -44 26 -87 l25 -79 -7 -31 c-4 -17 -16 -50 -27 -72 l-20 -42 6 -16 6 -16 57 0 57 0 55 55 54 54 -4 70 -4 70 -20 28 c-11 15 -40 38 -64 51 l-44 22 -48 0 c-26 0 -48 -3 -48 -7z"}), (0, t.createElement)("path", {d: "M160 379 c-32 -13 -78 -56 -96 -91 -8 -15 -14 -45 -14 -68 l0 -41 20 -39 c11 -21 36 -51 56 -66 l35 -27 55 -5 54 -4 5 14 c3 8 -2 32 -11 54 l-17 39 0 70 0 70 21 42 c12 23 22 47 22 53 l0 10 -52 -1 c-29 0 -64 -5 -78 -10z"}), (0, t.createElement)("path", {d: "M284 244 c-4 -14 -1 -44 5 -65 l12 -40 40 -39 c22 -21 56 -44 76 -51 l35 -11 45 6 44 6 34 27 c41 33 65 87 65 148 l0 45 -15 0 c-8 0 -34 -8 -57 -17 l-43 -18 -60 0 -60 0 -43 18 c-23 9 -49 17 -57 17 l-15 0 -6 -26z"})), (0, t.createElement)("g", {
		transform: "translate(0.000000,68.000000) scale(0.100000,-0.100000)",
		fill: "#bdbdbd",
		stroke: "none"
	}, (0, t.createElement)("path", {d: "M410 622 c0 -5 14 -7 30 -4 17 2 30 6 30 8 0 2 -13 4 -30 4 -16 0 -30 -4 -30 -8z"}), (0, t.createElement)("path", {d: "M600 555 c7 -9 15 -13 17 -11 7 7 -7 26 -19 26 l-10 0 12 -15z"}), (0, t.createElement)("path", {d: "M620 521 c0 -6 4 -13 10 -16 l10 -6 -6 15 c-7 18 -14 21 -14 7z"}), (0, t.createElement)("path", {d: "M51 474 l1 -19 5 13 c3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"}), (0, t.createElement)("path", {d: "M175 440 l-6 -10 15 6 c18 7 21 14 7 14 -6 0 -13 -4 -16 -10z"}), (0, t.createElement)("path", {d: "M391 414 l1 -19 5 13 c3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"}), (0, t.createElement)("path", {d: "M631 414 l1 -19 5 13 c3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"}), (0, t.createElement)("path", {d: "M220 386 c0 -2 16 -6 35 -8 19 -2 35 0 35 4 0 4 -16 8 -35 8 -19 0 -35 -2 -35 -4z"}), (0, t.createElement)("path", {d: "M99 333 l-14 -18 18 14 c9 7 17 15 17 17 0 8 -8 3 -21 -13z"}), (0, t.createElement)("path", {d: "M495 290 l-40 -7 35 -1 c19 -1 42 3 50 8 16 11 14 11 -45 0z"}), (0, t.createElement)("path", {d: "M56 273 l-7 -18 12 12 c7 7 10 15 7 18 -3 3 -9 -2 -12 -12z"}), (0, t.createElement)("path", {d: "M631 244 l1 -19 5 13 c3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"}), (0, t.createElement)("path", {d: "M75 133 c8 -18 18 -33 20 -33 10 0 4 16 -16 40 l-20 25 16 -32z"}), (0, t.createElement)("path", {d: "M260 91 c0 -6 4 -13 10 -16 l10 -6 -6 15 c-7 18 -14 21 -14 7z"}), (0, t.createElement)("path", {d: "M160 56 c0 -2 7 -7 16 -10 l15 -6 -6 10 c-6 10 -25 14 -25 6z"})), (0, t.createElement)("g", {
		transform: "translate(0.000000,68.000000) scale(0.100000,-0.100000)",
		fill: "#ececec",
		stroke: "none"
	}, (0, t.createElement)("path", {d: "M190 620 l-15 -10 12 0 c6 0 15 5 18 10 8 12 4 12 -15 0z"}), (0, t.createElement)("path", {d: "M416 597 c3 -10 9 -15 12 -12 3 3 0 11 -7 18 l-12 12 7 -18z"}), (0, t.createElement)("path", {d: "M565 586 c17 -13 32 -22 35 -19 6 5 -41 42 -55 43 -5 0 4 -11 20 -24z"}), (0, t.createElement)("path", {d: "M105 580 c-3 -5 -2 -10 4 -10 5 0 13 5 16 10 3 6 2 10 -4 10 -5 0 -13 -4 -16 -10z"}), (0, t.createElement)("path", {d: "M375 529 c10 -35 23 -45 18 -15 -3 15 -10 29 -15 32 l-10 7 7 -24z"}), (0, t.createElement)("path", {d: "M456 467 c3 -10 9 -15 12 -12 3 3 0 11 -7 18 l-12 12 7 -18z"}), (0, t.createElement)("path", {d: "M50 460 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M630 460 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M105 420 c-3 -5 -2 -10 4 -10 5 0 13 5 16 10 3 6 2 10 -4 10 -5 0 -13 -4 -16 -10z"}), (0, t.createElement)("path", {d: "M145 370 c-3 -5 -2 -10 4 -10 5 0 13 5 16 10 3 6 2 10 -4 10 -5 0 -13 -4 -16 -10z"}), (0, t.createElement)("path", {d: "M245 299 c-4 -6 -5 -12 -2 -15 2 -3 7 2 10 11 7 17 1 20 -8 4z"}), (0, t.createElement)("path", {d: "M235 239 c-4 -6 -5 -12 -2 -15 2 -3 7 2 10 11 7 17 1 20 -8 4z"}), (0, t.createElement)("path", {d: "M377 239 c7 -7 15 -10 18 -7 3 3 -2 9 -12 12 l-18 7 12 -12z"}), (0, t.createElement)("path", {d: "M540 240 l-15 -10 12 0 c6 0 15 5 18 10 8 12 4 12 -15 0z"}), (0, t.createElement)("path", {d: "M52 220 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"}), (0, t.createElement)("path", {d: "M230 201 c0 -6 4 -13 10 -16 l10 -6 -6 15 c-7 18 -14 21 -14 7z"}), (0, t.createElement)("path", {d: "M625 169 c-4 -6 -5 -12 -2 -15 2 -3 7 2 10 11 7 17 1 20 -8 4z"}), (0, t.createElement)("path", {d: "M300 151 c0 -5 5 -13 10 -16 6 -3 10 -2 10 4 0 5 -4 13 -10 16 -5 3 -10 2 -10 -4z"}), (0, t.createElement)("path", {d: "M410 56 c0 -2 7 -7 16 -10 l15 -6 -6 10 c-6 10 -25 14 -25 6z"})), (0, t.createElement)("g", {
		transform: "translate(0.000000,68.000000) scale(0.100000,-0.100000)",
		fill: "#7e7e7e",
		stroke: "none"
	}, (0, t.createElement)("path", {d: "M248 623 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 l-19 -1 13 -5z"}), (0, t.createElement)("path", {d: "M550 606 c0 -2 7 -9 15 -16 l15 -12 0 10 c0 5 -7 12 -15 16 -8 3 -15 4 -15 2z"}), (0, t.createElement)("path", {d: "M360 556 c0 -2 7 -9 15 -16 l15 -13 -6 17 c-3 9 -10 16 -15 16 -5 0 -9 -2 -9 -4z"}), (0, t.createElement)("path", {d: "M610 545 c0 -8 4 -15 10 -15 5 0 7 7 4 15 -4 8 -8 15 -10 15 -2 0 -4 -7 -4 -15z"}), (0, t.createElement)("path", {d: "M631 484 l1 -19 5 13 c3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"}), (0, t.createElement)("path", {d: "M630 400 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M158 373 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 l-19 -1 13 -5z"}), (0, t.createElement)("path", {d: "M64 288 l-7 -11 11 7 c12 7 16 16 8 16 -3 0 -8 -5 -12 -12z"}), (0, t.createElement)("path", {d: "M513 283 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"}), (0, t.createElement)("path", {d: "M282 220 c0 -19 2 -27 5 -17 2 9 2 25 0 35 -3 9 -5 1 -5 -18z"}), (0, t.createElement)("path", {d: "M458 223 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 l-19 -1 13 -5z"}), (0, t.createElement)("path", {d: "M51 184 l1 -19 5 13 c3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"}), (0, t.createElement)("path", {d: "M241 144 l1 -19 5 13 c3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"}), (0, t.createElement)("path", {d: "M150 60 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0 -4 -4 -4 -10z"}), (0, t.createElement)("path", {d: "M266 53 l-7 -18 12 12 c7 7 10 15 7 18 -3 3 -9 -2 -12 -12z"}), (0, t.createElement)("path", {d: "M463 43 c9 -2 23 -2 30 0 6 3 -1 5 -18 5 l-30 0 18 -5z"})), (0, t.createElement)("g", {
		transform: "translate(0.000000,68.000000) scale(0.100000,-0.100000)",
		fill: "#dfdfdf",
		stroke: "none"
	}, (0, t.createElement)("path", {d: "M267 620 c4 -4 19 -11 32 -15 l24 -7 -7 10 c-3 5 -17 12 -32 15 -14 2 -22 1 -17 -3z"}), (0, t.createElement)("path", {d: "M135 600 c-3 -5 -2 -10 4 -10 5 0 13 5 16 10 3 6 2 10 -4 10 -5 0 -13 -4 -16 -10z"}), (0, t.createElement)("path", {d: "M360 560 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0 -4 -4 -4 -10z"}), (0, t.createElement)("path", {d: "M67 543 c-4 -3 -7 -11 -7 -17 l0 -10 12 12 c6 6 9 14 7 17 -3 3 -9 2 -12 -2z"}), (0, t.createElement)("path", {d: "M456 433 l-7 -18 12 12 c7 7 10 15 7 18 -3 3 -9 -2 -12 -12z"}), (0, t.createElement)("path", {d: "M50 430 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M135 430 l-6 -10 15 6 c18 7 21 14 7 14 -6 0 -13 -4 -16 -10z"}), (0, t.createElement)("path", {d: "M630 430 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M75 410 l-6 -10 15 6 c18 7 21 14 7 14 -6 0 -13 -4 -16 -10z"}), (0, t.createElement)("path", {d: "M345 250 c3 -5 11 -10 16 -10 6 0 7 5 4 10 -3 6 -11 10 -16 10 -6 0 -7 -4 -4 -10z"}), (0, t.createElement)("path", {d: "M565 250 c-3 -5 -2 -10 4 -10 5 0 13 5 16 10 3 6 2 10 -4 10 -5 0 -13 -4 -16 -10z"}), (0, t.createElement)("path", {d: "M427 229 c7 -7 15 -10 18 -7 3 3 -2 9 -12 12 l-18 7 12 -12z"}), (0, t.createElement)("path", {d: "M490 230 l-15 -10 12 0 c6 0 15 5 18 10 8 12 4 12 -15 0z"}), (0, t.createElement)("path", {d: "M230 210 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M286 187 c3 -10 9 -15 12 -12 3 3 0 11 -7 18 l-12 12 7 -18z"}), (0, t.createElement)("path", {d: "M240 131 c0 -5 5 -13 10 -16 6 -3 10 -2 10 4 0 5 -4 13 -10 16 -5 3 -10 2 -10 -4z"}), (0, t.createElement)("path", {d: "M330 111 c0 -5 5 -13 10 -16 6 -3 10 -2 10 4 0 5 -4 13 -10 16 -5 3 -10 2 -10 -4z"}), (0, t.createElement)("path", {d: "M115 80 c3 -5 11 -10 16 -10 6 0 7 5 4 10 -3 6 -11 10 -16 10 -6 0 -7 -4 -4 -10z"}), (0, t.createElement)("path", {d: "M564 78 l-7 -11 11 7 c7 4 12 9 12 12 0 8 -9 4 -16 -8z"}), (0, t.createElement)("path", {d: "M213 43 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"})), (0, t.createElement)("g", {
		transform: "translate(0.000000,68.000000) scale(0.100000,-0.100000)",
		fill: "#9c9c9c",
		stroke: "none"
	}, (0, t.createElement)("path", {d: "M173 613 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"}), (0, t.createElement)("path", {d: "M283 613 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"}), (0, t.createElement)("path", {d: "M420 580 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M380 520 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M446 507 c3 -10 9 -15 12 -12 3 3 0 11 -7 18 l-12 12 7 -18z"}), (0, t.createElement)("path", {d: "M115 420 l-6 -10 15 6 c18 7 21 14 7 14 -6 0 -13 -4 -16 -10z"}), (0, t.createElement)("path", {d: "M330 418 c3 -3 20 -13 38 -22 l32 -17 0 14 c0 7 -8 13 -17 13 -10 1 -27 5 -38 9 -11 5 -18 6 -15 3z"}), (0, t.createElement)("path", {d: "M208 383 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 l-19 -1 13 -5z"}), (0, t.createElement)("path", {d: "M609 363 l-14 -18 18 14 c9 7 17 15 17 17 0 8 -8 3 -21 -13z"}), (0, t.createElement)("path", {d: "M265 339 c-4 -6 -5 -12 -2 -15 2 -3 7 2 10 11 7 17 1 20 -8 4z"}), (0, t.createElement)("path", {d: "M608 263 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 l-19 -1 13 -5z"}), (0, t.createElement)("path", {d: "M51 244 l1 -19 5 13 c3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"}), (0, t.createElement)("path", {d: "M393 233 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"}), (0, t.createElement)("path", {d: "M523 233 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"}), (0, t.createElement)("path", {d: "M620 150 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M76 127 c3 -10 9 -15 12 -12 3 3 0 11 -7 18 l-12 12 7 -18z"}), (0, t.createElement)("path", {d: "M316 125 c4 -8 11 -15 16 -15 l10 0 -12 15 c-7 8 -14 15 -16 15 -2 0 -1 -7 2 -15z"}), (0, t.createElement)("path", {d: "M360 86 c0 -2 8 -10 18 -17 l17 -14 -14 18 c-13 16 -21 21 -21 13z"}), (0, t.createElement)("path", {d: "M248 43 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 l-19 -1 13 -5z"})), (0, t.createElement)("g", {
		transform: "translate(0.000000,68.000000) scale(0.100000,-0.100000)",
		fill: "#343434",
		stroke: "none"
	}, (0, t.createElement)("path", {d: "M164 608 l-7 -11 11 7 c12 7 16 16 8 16 -3 0 -8 -5 -12 -12z"}), (0, t.createElement)("path", {d: "M586 575 c4 -8 11 -15 16 -15 l10 0 -12 15 c-7 8 -14 15 -16 15 -2 0 -1 -7 2 -15z"}), (0, t.createElement)("path", {d: "M430 551 c0 -6 4 -13 10 -16 l10 -6 -6 15 c-7 18 -14 21 -14 7z"}), (0, t.createElement)("path", {d: "M391 484 l1 -19 5 13 c3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"}), (0, t.createElement)("path", {d: "M325 420 c3 -5 8 -10 11 -10 3 0 2 5 -1 10 -3 6 -8 10 -11 10 -3 0 -2 -4 1 -10z"}), (0, t.createElement)("path", {d: "M63 403 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"}), (0, t.createElement)("path", {d: "M373 393 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"}), (0, t.createElement)("path", {d: "M125 360 l-6 -10 15 6 c18 7 21 14 7 14 -6 0 -13 -4 -16 -10z"}), (0, t.createElement)("path", {d: "M415 329 c-4 -6 -5 -12 -2 -15 2 -3 7 2 10 11 7 17 1 20 -8 4z"}), (0, t.createElement)("path", {d: "M254 318 l-7 -11 11 7 c12 7 16 16 8 16 -3 0 -8 -5 -12 -12z"}), (0, t.createElement)("path", {d: "M544 298 l-7 -11 11 7 c7 4 12 9 12 12 0 8 -9 4 -16 -8z"}), (0, t.createElement)("path", {d: "M417 289 c7 -7 15 -10 18 -7 3 3 -2 9 -12 12 l-18 7 12 -12z"}), (0, t.createElement)("path", {d: "M55 170 c3 -5 8 -10 11 -10 3 0 2 5 -1 10 -3 6 -8 10 -11 10 -3 0 -2 -4 1 -10z"}), (0, t.createElement)("path", {d: "M241 164 l1 -19 5 13 c3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"}), (0, t.createElement)("path", {d: "M290 171 c0 -6 4 -13 10 -16 l10 -6 -6 15 c-7 18 -14 21 -14 7z"}), (0, t.createElement)("path", {d: "M90 106 c0 -2 8 -10 18 -17 l17 -14 -14 18 c-13 16 -21 21 -21 13z"}), (0, t.createElement)("path", {d: "M493 43 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"})), (0, t.createElement)("g", {
		transform: "translate(0.000000,68.000000) scale(0.100000,-0.100000)",
		fill: "#4b4b4b",
		stroke: "none"
	}, (0, t.createElement)("path", {d: "M208 623 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 l-19 -1 13 -5z"}), (0, t.createElement)("path", {d: "M488 623 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 l-19 -1 13 -5z"}), (0, t.createElement)("path", {d: "M300 616 c0 -2 8 -10 18 -17 l17 -14 -14 18 c-13 16 -21 21 -21 13z"}), (0, t.createElement)("path", {d: "M425 570 c3 -5 8 -10 11 -10 3 0 2 5 -1 10 -3 6 -8 10 -11 10 -3 0 -2 -4 1 -10z"}), (0, t.createElement)("path", {d: "M288 433 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 l-19 -1 13 -5z"}), (0, t.createElement)("path", {d: "M448 405 c-3 -11 -9 -29 -13 -40 -3 -11 1 -7 10 8 9 16 15 33 12 40 l-3 11 -6 -19z"}), (0, t.createElement)("path", {d: "M620 380 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M75 309 c-4 -6 -5 -12 -2 -15 2 -3 7 2 10 11 7 17 1 20 -8 4z"}), (0, t.createElement)("path", {d: "M241 264 l1 -19 5 13 c3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"}), (0, t.createElement)("path", {d: "M363 243 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"}), (0, t.createElement)("path", {d: "M553 243 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"}), (0, t.createElement)("path", {d: "M614 138 l-7 -11 11 7 c7 4 12 9 12 12 0 8 -9 4 -16 -8z"}), (0, t.createElement)("path", {d: "M390 60 c8 -5 20 -10 25 -10 6 0 3 5 -5 10 -8 5 -19 10 -25 10 -5 0 -3 -5 5 -10z"}), (0, t.createElement)("path", {d: "M433 43 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"})), (0, t.createElement)("g", {
		transform: "translate(0.000000,68.000000) scale(0.100000,-0.100000)",
		fill: "#d3d3d3",
		stroke: "none"
	}, (0, t.createElement)("path", {d: "M570 590 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0 -4 -4 -4 -10z"}), (0, t.createElement)("path", {d: "M430 560 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M593 563 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"}), (0, t.createElement)("path", {d: "M615 530 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0 -7 -4 -4 -10z"}), (0, t.createElement)("path", {d: "M460 450 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M260 446 c0 -2 7 -7 16 -10 l15 -6 -6 10 c-6 10 -25 14 -25 6z"}), (0, t.createElement)("path", {d: "M50 420 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M594 348 l-7 -11 11 7 c12 7 16 16 8 16 -3 0 -8 -5 -12 -12z"}), (0, t.createElement)("path", {d: "M564 318 l-7 -11 11 7 c12 7 16 16 8 16 -3 0 -8 -5 -12 -12z"}), (0, t.createElement)("path", {d: "M286 254 l-6 -17 15 13 c17 14 19 20 6 20 -5 0 -12 -7 -15 -16z"}), (0, t.createElement)("path", {d: "M327 259 c7 -7 15 -10 18 -7 3 3 -2 9 -12 12 l-18 7 12 -12z"}), (0, t.createElement)("path", {d: "M230 220 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M325 110 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0 -7 -4 -4 -10z"}), (0, t.createElement)("path", {d: "M597 113 c-4 -3 -7 -11 -7 -17 l0 -10 12 12 c6 6 9 14 7 17 -3 3 -9 2 -12 -2z"}), (0, t.createElement)("path", {d: "M145 60 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0 -7 -4 -4 -10z"}), (0, t.createElement)("path", {d: "M535 60 c-3 -5 -2 -10 4 -10 5 0 13 5 16 10 3 6 2 10 -4 10 -5 0 -13 -4 -16 -10z"})), (0, t.createElement)("g", {
		transform: "translate(0.000000,68.000000) scale(0.100000,-0.100000)",
		fill: "#404040",
		stroke: "none"
	}, (0, t.createElement)("path", {d: "M355 570 c10 -11 20 -20 23 -20 3 0 -3 9 -13 20 -10 11 -20 20 -23 20 -3 0 3 -9 13 -20z"}), (0, t.createElement)("path", {d: "M630 500 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M450 490 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M208 443 c12 -2 30 -2 40 0 9 3 -1 5 -23 4 l-40 0 23 -4z"}), (0, t.createElement)("path", {d: "M307 429 c7 -7 15 -10 18 -7 3 3 -2 9 -12 12 l-18 7 12 -12z"}), (0, t.createElement)("path", {d: "M385 390 c3 -5 8 -10 11 -10 3 0 2 5 -1 10 -3 6 -8 10 -11 10 -3 0 -2 -4 1 -10z"}), (0, t.createElement)("path", {d: "M624 388 l-7 -11 11 7 c12 7 16 16 8 16 -3 0 -8 -5 -12 -12z"}), (0, t.createElement)("path", {d: "M270 350 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M425 349 c-4 -6 -5 -12 -2 -15 2 -3 7 2 10 11 7 17 1 20 -8 4z"}), (0, t.createElement)("path", {d: "M631 184 l1 -19 5 13 c3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"}), (0, t.createElement)("path", {d: "M270 70 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"})), (0, t.createElement)("g", {
		transform: "translate(0.000000,68.000000) scale(0.100000,-0.100000)",
		fill: "#0a0a0a",
		stroke: "none"
	}, (0, t.createElement)("path", {d: "M505 620 c3 -5 8 -10 11 -10 3 0 2 5 -1 10 -3 6 -8 10 -11 10 -3 0 -2 -4 1 -10z"}), (0, t.createElement)("path", {d: "M575 590 c3 -5 8 -10 11 -10 3 0 2 5 -1 10 -3 6 -8 10 -11 10 -3 0 -2 -4 1 -10z"}), (0, t.createElement)("path", {d: "M333 583 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"}), (0, t.createElement)("path", {d: "M605 560 c3 -5 8 -10 11 -10 3 0 2 5 -1 10 -3 6 -8 10 -11 10 -3 0 -2 -4 1 -10z"}), (0, t.createElement)("path", {d: "M620 530 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M440 520 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M450 480 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M163 433 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"}), (0, t.createElement)("path", {d: "M450 420 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M50 410 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0 -4 -4 -4 -10z"}), (0, t.createElement)("path", {d: "M103 413 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"}), (0, t.createElement)("path", {d: "M240 250 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M413 233 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"}), (0, t.createElement)("path", {d: "M503 233 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"}), (0, t.createElement)("path", {d: "M240 180 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M85 110 c3 -5 8 -10 11 -10 3 0 2 5 -1 10 -3 6 -8 10 -11 10 -3 0 -2 -4 1 -10z"}), (0, t.createElement)("path", {d: "M335 100 c3 -5 8 -10 11 -10 3 0 2 5 -1 10 -3 6 -8 10 -11 10 -3 0 -2 -4 1 -10z"}), (0, t.createElement)("path", {d: "M594 98 l-7 -11 11 7 c7 4 12 9 12 12 0 8 -9 4 -16 -8z"}), (0, t.createElement)("path", {d: "M145 60 c3 -5 8 -10 11 -10 3 0 2 5 -1 10 -3 6 -8 10 -11 10 -3 0 -2 -4 1 -10z"})), (0, t.createElement)("g", {
		transform: "translate(0.000000,68.000000) scale(0.100000,-0.100000)",
		fill: "#252525",
		stroke: "none"
	}, (0, t.createElement)("path", {d: "M410 620 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M530 610 c8 -5 20 -10 25 -10 6 0 3 5 -5 10 -8 5 -19 10 -25 10 -5 0 -3 -5 5 -10z"}), (0, t.createElement)("path", {d: "M105 580 l-6 -10 15 6 c18 7 21 14 7 14 -6 0 -13 -4 -16 -10z"}), (0, t.createElement)("path", {d: "M175 380 l-6 -10 15 6 c18 7 21 14 7 14 -6 0 -13 -4 -16 -10z"}), (0, t.createElement)("path", {d: "M280 379 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10 -5 -10 -11z"}), (0, t.createElement)("path", {d: "M144 368 l-7 -11 11 7 c7 4 12 9 12 12 0 8 -9 4 -16 -8z"}), (0, t.createElement)("path", {d: "M50 260 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M403 233 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"}), (0, t.createElement)("path", {d: "M513 233 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"}), (0, t.createElement)("path", {d: "M300 151 c0 -6 4 -13 10 -16 l10 -6 -6 15 c-7 18 -14 21 -14 7z"}), (0, t.createElement)("path", {d: "M325 110 c3 -5 8 -10 11 -10 3 0 2 5 -1 10 -3 6 -8 10 -11 10 -3 0 -2 -4 1 -10z"}), (0, t.createElement)("path", {d: "M600 110 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M115 80 c3 -5 8 -10 11 -10 3 0 2 5 -1 10 -3 6 -8 10 -11 10 -3 0 -2 -4 1 -10z"})), (0, t.createElement)("g", {
		transform: "translate(0.000000,68.000000) scale(0.100000,-0.100000)",
		fill: "#c6c6c6",
		stroke: "none"
	}, (0, t.createElement)("path", {d: "M153 603 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"}), (0, t.createElement)("path", {d: "M325 590 c3 -5 8 -10 11 -10 3 0 2 5 -1 10 -3 6 -8 10 -11 10 -3 0 -2 -4 1 -10z"}), (0, t.createElement)("path", {d: "M56 513 l-7 -18 12 12 c7 7 10 15 7 18 -3 3 -9 -2 -12 -12z"}), (0, t.createElement)("path", {d: "M630 470 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M281 374 l1 -19 5 13 c3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"}), (0, t.createElement)("path", {d: "M590 260 l-15 -10 12 0 c6 0 15 5 18 10 8 12 4 12 -15 0z"}), (0, t.createElement)("path", {d: "M443 223 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"}), (0, t.createElement)("path", {d: "M473 223 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"}), (0, t.createElement)("path", {d: "M50 200 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M610 130 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M250 111 c0 -6 4 -13 10 -16 l10 -6 -6 15 c-7 18 -14 21 -14 7z"})), (0, t.createElement)("g", {
		transform: "translate(0.000000,68.000000) scale(0.100000,-0.100000)",
		fill: "#161616",
		stroke: "none"
	}, (0, t.createElement)("path", {d: "M293 613 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"}), (0, t.createElement)("path", {d: "M135 600 l-6 -10 15 6 c18 7 21 14 7 14 -6 0 -13 -4 -16 -10z"}), (0, t.createElement)("path", {d: "M65 539 c-4 -6 -5 -12 -2 -15 2 -3 7 2 10 11 7 17 1 20 -8 4z"}), (0, t.createElement)("path", {d: "M380 530 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M625 260 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0 -7 -4 -4 -10z"}), (0, t.createElement)("path", {d: "M340 256 c0 -2 7 -7 16 -10 l15 -6 -6 10 c-6 10 -25 14 -25 6z"}), (0, t.createElement)("path", {d: "M565 250 l-6 -10 15 6 c18 7 21 14 7 14 -6 0 -13 -4 -16 -10z"}), (0, t.createElement)("path", {d: "M246 127 c3 -10 9 -15 12 -12 3 3 0 11 -7 18 l-12 12 7 -18z"}), (0, t.createElement)("path", {d: "M123 73 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"}), (0, t.createElement)("path", {d: "M540 60 l-15 -10 12 0 c6 0 15 5 18 10 8 12 4 12 -15 0z"}), (0, t.createElement)("path", {d: "M183 43 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"})), (0, t.createElement)("g", {
		transform: "translate(0.000000,68.000000) scale(0.100000,-0.100000)",
		fill: "#acacac",
		stroke: "none"
	}, (0, t.createElement)("path", {d: "M410 610 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M124 588 l-7 -11 11 7 c12 7 16 16 8 16 -3 0 -8 -5 -12 -12z"}), (0, t.createElement)("path", {d: "M390 430 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M55 410 c3 -5 8 -10 11 -10 3 0 2 5 -1 10 -3 6 -8 10 -11 10 -3 0 -2 -4 1 -10z"}), (0, t.createElement)("path", {d: "M84 318 l-7 -11 11 7 c12 7 16 16 8 16 -3 0 -8 -5 -12 -12z"}), (0, t.createElement)("path", {d: "M250 310 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M625 260 c3 -5 8 -10 11 -10 3 0 2 5 -1 10 -3 6 -8 10 -11 10 -3 0 -2 -4 1 -10z"}), (0, t.createElement)("path", {d: "M135 70 c3 -5 8 -10 11 -10 3 0 2 5 -1 10 -3 6 -8 10 -11 10 -3 0 -2 -4 1 -10z"}), (0, t.createElement)("path", {d: "M554 68 l-7 -11 11 7 c12 7 16 16 8 16 -3 0 -8 -5 -12 -12z"}), (0, t.createElement)("path", {d: "M523 53 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"})), (0, t.createElement)("g", {
		transform: "translate(0.000000,68.000000) scale(0.100000,-0.100000)",
		fill: "#b3b3b3",
		stroke: "none"
	}, (0, t.createElement)("path", {d: "M513 613 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"}), (0, t.createElement)("path", {d: "M440 530 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M384 398 l-7 -11 11 7 c7 4 12 9 12 12 0 8 -9 4 -16 -8z"}), (0, t.createElement)("path", {d: "M274 358 l-7 -11 11 7 c7 4 12 9 12 12 0 8 -9 4 -16 -8z"}), (0, t.createElement)("path", {d: "M411 304 l1 -19 5 13 c3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"}), (0, t.createElement)("path", {d: "M453 283 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"}), (0, t.createElement)("path", {d: "M298 263 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 l-19 -1 13 -5z"}), (0, t.createElement)("path", {d: "M630 230 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M60 160 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M604 118 l-7 -11 11 7 c7 4 12 9 12 12 0 8 -9 4 -16 -8z"}), (0, t.createElement)("path", {d: "M203 43 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"})), (0, t.createElement)("g", {
		transform: "translate(0.000000,68.000000) scale(0.100000,-0.100000)",
		fill: "#6b6b6b",
		stroke: "none"
	}, (0, t.createElement)("path", {d: "M228 623 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 l-19 -1 13 -5z"}), (0, t.createElement)("path", {d: "M84 558 l-19 -23 23 19 c21 18 27 26 19 26 -2 0 -12 -10 -23 -22z"}), (0, t.createElement)("path", {d: "M253 443 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"}), (0, t.createElement)("path", {d: "M193 383 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"}), (0, t.createElement)("path", {d: "M240 280 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"})), (0, t.createElement)("g", {
		transform: "translate(0.000000,68.000000) scale(0.100000,-0.100000)",
		fill: "#5b5b5b",
		stroke: "none"
	}, (0, t.createElement)("path", {d: "M390 470 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M93 413 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"}), (0, t.createElement)("path", {d: "M313 263 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"}), (0, t.createElement)("path", {d: "M193 43 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"}), (0, t.createElement)("path", {d: "M443 43 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"})), (0, t.createElement)("g", {
		transform: "translate(0.000000,68.000000) scale(0.100000,-0.100000)",
		fill: "#a2a2a2",
		stroke: "none"
	}, (0, t.createElement)("path", {d: "M463 623 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"}), (0, t.createElement)("path", {d: "M50 490 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M390 440 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M554 308 l-7 -11 11 7 c12 7 16 16 8 16 -3 0 -8 -5 -12 -12z"}), (0, t.createElement)("path", {d: "M443 283 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"}), (0, t.createElement)("path", {d: "M630 220 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"})), (0, t.createElement)("g", {
		transform: "translate(0.000000,68.000000) scale(0.100000,-0.100000)",
		fill: "#929292",
		stroke: "none"
	}, (0, t.createElement)("path", {d: "M390 450 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"}), (0, t.createElement)("path", {d: "M153 433 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"}), (0, t.createElement)("path", {d: "M433 283 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"}), (0, t.createElement)("path", {d: "M630 210 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"})), (0, t.createElement)("g", {
		transform: "translate(0.000000,68.000000) scale(0.100000,-0.100000)",
		fill: "#626262",
		stroke: "none"
	}, (0, t.createElement)("path", {d: "M473 623 c4 -3 10 -3 14 0 3 4 0 7 -7 7 -7 0 -10 -3 -7 -7z"}), (0, t.createElement)("path", {d: "M114 348 l-7 -11 11 7 c7 4 12 9 12 12 0 8 -9 4 -16 -8z"}), (0, t.createElement)("path", {d: "M630 200 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"})), (0, t.createElement)("g", {
		transform: "translate(0.000000,68.000000) scale(0.100000,-0.100000)",
		fill: "#747474",
		stroke: "none"
	}, (0, t.createElement)("path", {d: "M390 460 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"})), (0, t.createElement)("g", {
		transform: "translate(0.000000,68.000000) scale(0.100000,-0.100000)",
		fill: "#878787",
		stroke: "none"
	}, (0, t.createElement)("path", {d: "M50 500 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"})), (0, t.createElement)("g", {transform: "translate(0.000000,68.000000) scale(0.100000,-0.100000)", fill: "#535353", stroke: "none"}));
	const o = n, i = (window.React, [{label: (0, r.__)("Simplify language", "wraiter-light"), icon: "", value: (0, r.__)("Simplify the language of the following text: ", "wraiter-light")}, {
			label: (0, r.__)("Make it longer", "wraiter-light"),
			icon: "",
			value: (0, r.__)("Make the following text longer: ", "wraiter-light")
		}, {label: (0, r.__)("Make it shorter", "wraiter-light"), icon: "", value: (0, r.__)("Make the following text shorter: ", "wraiter-light")}, {
			label: (0, r.__)("Fix spelling & grammar", "wraiter-light"),
			icon: "",
			value: (0, r.__)("Fix the spelling and grammar of the following text: ", "wraiter-light")
		}, {value: (0, r.__)("Compose descriptions for ", "wraiter-light"), icon: "description", label: (0, r.__)("Compose descriptions for ", "wraiter-light")}, {
			value: (0, r.__)("Compose product descriptions for ", "wraiter-light"),
			icon: "description",
			label: (0, r.__)("Compose product descriptions for ", "wraiter-light")
		}, {value: (0, r.__)("Write blog posts for ", "wraiter-light"), icon: "article", label: (0, r.__)("Write blog posts for ", "wraiter-light")}, {
			value: (0, r.__)("Create concise microcopy for a submission form with ", "wraiter-light"),
			icon: "form",
			label: (0, r.__)("Create concise microcopy for a submission form with ", "wraiter-light")
		}, {value: (0, r.__)("Write a paragraph on it ", "wraiter-light"), icon: "description", label: (0, r.__)("Write a paragraph on it ", "wraiter-light")}, {
			value: (0, r.__)("Continue this text ", "wraiter-light"),
			icon: "description",
			label: (0, r.__)("Continue the text ", "wraiter-light")
		}, {value: (0, r.__)("Generate ideas on this ", "wraiter-light"), icon: "lightbulb", label: (0, r.__)("Generate ideas on this ", "wraiter-light")}, {
			value: (0, r.__)("Write an article about this ", "wraiter-light"),
			icon: "article",
			label: (0, r.__)("Write an article about this ", "wraiter-light")
		}, {value: (0, r.__)("Summarize this text ", "wraiter-light"), icon: "description", label: (0, r.__)("Summarize this text ", "wraiter-light")}, {
			value: (0, r.__)("Paraphrase this text ", "wraiter-light"),
			icon: "description",
			label: (0, r.__)("Paraphrase this text ", "wraiter-light")
		}, {value: (0, r.__)("Explain to a 5-year-old kid this text ", "wraiter-light"), icon: "child", label: (0, r.__)("Explain to a 5-year-old kid this text ", "wraiter-light")}]),
		d = [{value: (0, r.__)("Compose descriptions for ", "wraiter-light"), icon: "description", label: (0, r.__)("Compose descriptions for ", "wraiter-light")}, {
			value: (0, r.__)("Compose product descriptions for ", "wraiter-light"),
			icon: "description",
			label: (0, r.__)("Compose product descriptions for ", "wraiter-light")
		}, {
			value: (0, r.__)("Write blog posts for ", "wraiter-light"),
			icon: "article",
			label: (0, r.__)("Write blog posts for ", "wraiter-light")
		}, {
			value: (0, r.__)("Create concise microcopy for a submission form with ", "wraiter-light"),
			icon: "form",
			label: (0, r.__)("Create concise microcopy for a submission form with ", "wraiter-light")
		}, {value: (0, r.__)("Write a paragraph on it ", "wraiter-light"), icon: "description", label: (0, r.__)("Write a paragraph on it ", "wraiter-light")}, {
			value: (0, r.__)("Continue this text ", "wraiter-light"),
			icon: "description",
			label: (0, r.__)("Continue the text ", "wraiter-light")
		}, {value: (0, r.__)("Generate ideas on this ", "wraiter-light"), icon: "lightbulb", label: (0, r.__)("Generate ideas on this ", "wraiter-light")}, {
			value: (0, r.__)("Write an article about this ", "wraiter-light"),
			icon: "article",
			label: (0, r.__)("Write an article about this ", "wraiter-light")
		}, {value: (0, r.__)("Summarize this text ", "wraiter-light"), icon: "description", label: (0, r.__)("Summarize this text ", "wraiter-light")}, {
			value: (0, r.__)("Paraphrase this text ", "wraiter-light"),
			icon: "description",
			label: (0, r.__)("Paraphrase this text ", "wraiter-light")
		}, {value: (0, r.__)("Explain to a 5-year-old kid this text ", "wraiter-light"), icon: "child", label: (0, r.__)("Explain to a 5-year-old kid this text ", "wraiter-light")}], s = e => {
			let {NewPrompt: a} = e;
			const [l, c] = (0, t.useState)("");
			return (0, t.createElement)("div", {className: "wraiter-modal-content wraiter-new-prompt"}, (0, t.createElement)("div", {className: "wraiter-modal-inline-content"}, (0, t.createElement)("form", null, (0, t.createElement)("div", {className: "wraiter-modal-textarea-row"}, (0, t.createElement)("div", {className: "wraiter-modal-input-content"}, (0, t.createElement)("div", {className: "wraiter-modal-input-inline"}, (0, t.createElement)("div", {className: "wraiter-modal-input-row"}, (0, t.createElement)("div", {className: "wraiter-modal-input-column"}, (0, t.createElement)("input", {
				className: "wraiter-modal-input",
				autoComplete: "off",
				name: "prompt",
				placeholder: "Describe the text and tone you want to use...",
				required: "required",
				type: "text",
				value: l,
				onChange: e => c(e.target.value)
			})))))), (0, t.createElement)("div", {className: "wraiter-modal-textarea-row"}, (0, t.createElement)("h4", {className: "wraiter-suggest"}, " ", (0, r.__)("Suggested prompts:", "wraiter")), (0, t.createElement)("div", {className: "wraiter-modal-suggest-buttons"}, d.map(((e, a) => (0, t.createElement)("div", {
				className: "wraiter-modal-instruct-button",
				key: a,
				onClick: () => c(e.value)
			}, (0, t.createElement)("div", null, (0, t.createElement)("span", null, e.label))))))), (0, t.createElement)("div", {className: "wraiter-modal-submit-row"}, (0, t.createElement)("div", {className: "wraiter-modal-submit-buttons"}, (0, t.createElement)("button", {
				className: "wraiter-modal-submit-button",
				type: "submit",
				onClick: e => {
					if (e.preventDefault(), a.autocompleteType.requiresTextSelection) {
						const e = l;
						e && a.autocompleteResponse(a.autocompleteType.operationId, e, a.setIsLoading).then((e => {
							console.log("response", e), a.handleNewSelectText(e), a.handleNewPromptClick(!1)
						})).catch((e => {
							console.log("error", e)
						}))
					} else a.autocompleteResponse(a.autocompleteType.operationId, selectedText, a.setIsLoading).then((e => {
						a.handleNewSelectText(e), a.handleNewPromptClick(!1)
					})).catch((e => {
						console.log("error", e)
					}))
				}
			}, (0, r.__)("Generate text", "wraiter")))))))
		}, p = e => {
			let {selectText: a, handleNewPromptClick: l, closeMainWindowOpen: c, NewPrompt: n} = e;
			const [o, d] = (0, t.useState)(a), [s, p] = (0, t.useState)("");
			(0, t.useEffect)((() => {
				d(a)
			}), [a]), (0, t.useEffect)((() => {
				const e = document.getElementById("wraiter-textarea");
				e && (e.style.height = "auto", e.style.height = `${e.scrollHeight}px`)
			}), [o]);
			const m = e => {
				if (e.preventDefault(), n.autocompleteType.requiresTextSelection) {
					if (o) {
						let t = e.target.getAttribute("data-instuction");
						t += o, n.autocompleteResponse(n.autocompleteType.operationId, t, n.setIsLoading).then((e => {
							n.handleNewSelectText(e), n.handleNewPromptClick(!1)
						})).catch((e => {
							console.log("error", e)
						}))
					}
				} else n.autocompleteResponse(n.autocompleteType.operationId, o, n.setIsLoading).then((e => {
					n.handleNewSelectText(e), n.handleNewPromptClick(!1)
				})).catch((e => {
					console.log("error", e)
				}))
			};
			return (0, t.createElement)("div", {className: "wraiter-modal-content"}, (0, t.createElement)("div", {className: "wraiter-modal-inline-content"}, (0, t.createElement)("div", {className: "wraiter-modal-inline-content"}, s && (0, t.createElement)("div", {className: "wraiter-modal-message-row"}, (0, t.createElement)("div", {className: "wraiter-modal-message-main"}, (0, t.createElement)("div", {className: "wraiter-modal-message-content"}, (0, r.__)("Unknown error. Please try again later.", "wraiter")), (0, r.__)("Error code: ", "wraiter"), s)), (0, t.createElement)("div", {className: "wraiter-modal-textarea-row"}, (0, t.createElement)("div", {className: "wraiter-modal-textarea"}, (0, t.createElement)("textarea", {
				id: "wraiter-textarea",
				value: o,
				onChange: e => {
					e.target.style.height = "auto", e.target.style.height = `${e.target.scrollHeight}px`, d(e.target.value)
				}
			}))), (0, t.createElement)("div", {className: "wraiter-modal-instruct-row"}, i.map(((e, a) => (0, t.createElement)("div", {className: "wraiter-modal-instruct-buttons"}, (0, t.createElement)("div", {
				className: "wraiter-modal-instruct-button",
				key: a
			}, (0, t.createElement)("span", {
				className: "wraiter-modal-instruct-title",
				"data-instuction": e.value,
				onClick: m
			}, e.label)))))), (0, t.createElement)("div", {className: "wraiter-modal-submit-row"}, (0, t.createElement)("div", {className: "wraiter-modal-submit-buttons"}, (0, t.createElement)("button", {
				className: "wraiter-modal-submit-button",
				tabIndex: "0",
				type: "button",
				onClick: l
			}, (0, r.__)("New prompt", "wraiter")), (0, t.createElement)("button", {
				className: "wraiter-modal-submit-button", tabIndex: "0", type: "button", onClick: () => {
					const e = wp.data.select("core/block-editor").getSelectedBlock();
					if (e) {
						const t = o;
						wp.data.dispatch("core/block-editor").updateBlockAttributes(e.clientId, {content: t}), c()
					}
				}
			}, (0, r.__)("Use text", "wraiter")))))))
		}, m = () => (0, t.createElement)("div", {className: "wraiter-loader-line"}), h = ["core/code", "core/freeform", "core/heading", "core/list", "core/list-item", "core/paragraph", "core/preformatted"], E = wraiterLightConfig;

	async function w() {
		let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "below", t = z(), [a, l] = g(t), c = l.clientId, r = a.clientId, n = wp.data.select("core/block-editor").getBlock(c), o = u();
		if ("above" === e) {
			let e = wp.blocks.createBlock("core/paragraph", {content: o}), t = wp.data.select("core/block-editor").getBlockIndex(r), a = wp.data.select("core/block-editor").getBlockRootClientId(r);
			return await wp.data.dispatch("core/block-editor").insertBlock(e, t, a), e
		}
		if (t.length > 1 || "core/paragraph" !== n.name) {
			let e = wp.blocks.createBlock("core/paragraph", {content: o}), t = wp.data.select("core/block-editor").getBlockRootClientId(c), a = wp.data.select("core/block-editor").getBlockIndex(c) + 1;
			if (!wp.data.select("core/block-editor").canInsertBlockType("core/paragraph", t)) for (; t && (a = wp.data.select("core/block-editor").getBlockIndex(t) + 1, t = wp.data.select("core/block-editor").getBlockRootClientId(t), !wp.data.select("core/block-editor").canInsertBlockType("core/paragraph", t));) ;
			return await wp.data.dispatch("core/block-editor").insertBlock(e, a, t), e
		}
		let i = wp.data.select("core/block-editor").getBlockRootClientId(c);
		if (!wp.data.select("core/block-editor").canInsertBlockType("core/paragraph", i)) {
			for (; i && (i = wp.data.select("core/block-editor").getBlockRootClientId(i), !wp.data.select("core/block-editor").canInsertBlockType("core/paragraph", i));) ;
			let e = wp.blocks.createBlock("core/paragraph", {content: o});
			return await wp.data.dispatch("core/block-editor").insertBlock(e, void 0, i), e
		}
		let d = f(n), s = wp.richText.create({html: d}), p = d.length;
		"offset" in l && (p = l.offset);
		let m = wp.richText.slice(s, 0, p), h = wp.richText.slice(s, p, s.text.length), E = wp.richText.toHTMLString({value: m}), w = wp.richText.toHTMLString({value: h}), M = n.attributes;
		const b = l.attributeKey;
		let k = M;
		k[b] = E;
		const _ = wp.blocks.createBlock(n.name, k);
		let x = M;
		x[b] = o;
		let v = wp.blocks.createBlock("core/paragraph", x), y = M;
		y[b] = w;
		let I = [_, v, wp.blocks.createBlock(n.name, y)];
		return 0 === h.text.trim().length && (I = [_, v]), await wp.data.dispatch("core/block-editor").replaceBlock(c, I), v
	}

	async function M() {
		let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "below", t = z(), [a, l] = g(t), c = l.clientId, r = a.clientId, n = wp.data.select("core/block-editor").getBlock(c), o = u();
		if ("above" === e) {
			let e = wp.blocks.createBlock("core/paragraph", {content: o}), t = wp.data.select("core/block-editor").getBlockIndex(r), a = wp.data.select("core/block-editor").getBlockRootClientId(r);
			return await wp.data.dispatch("core/block-editor").insertBlock(e, t, a), e
		}
		if (t.length > 1 || "core/paragraph" !== n.name) {
			let e = wp.blocks.createBlock("core/paragraph", {content: o}), t = wp.data.select("core/block-editor").getBlockRootClientId(c), a = wp.data.select("core/block-editor").getBlockIndex(c) + 1;
			if (!wp.data.select("core/block-editor").canInsertBlockType("core/paragraph", t)) for (; t && (a = wp.data.select("core/block-editor").getBlockIndex(t) + 1, t = wp.data.select("core/block-editor").getBlockRootClientId(t), !wp.data.select("core/block-editor").canInsertBlockType("core/paragraph", t));) ;
			return await wp.data.dispatch("core/block-editor").insertBlock(e, a, t), e
		}
		let i = wp.data.select("core/block-editor").getBlockRootClientId(c);
		if (!wp.data.select("core/block-editor").canInsertBlockType("core/paragraph", i)) {
			for (; i && (i = wp.data.select("core/block-editor").getBlockRootClientId(i), !wp.data.select("core/block-editor").canInsertBlockType("core/paragraph", i));) ;
			let e = wp.blocks.createBlock("core/paragraph", {content: o});
			return await wp.data.dispatch("core/block-editor").insertBlock(e, void 0, i), e
		}
		let d = f(n), s = wp.richText.create({html: d}), p = d.length;
		"offset" in l && (p = l.offset);
		let m = wp.richText.slice(s, 0, p), h = wp.richText.slice(s, p, s.text.length), E = wp.richText.toHTMLString({value: m}), w = wp.richText.toHTMLString({value: h}), M = n.attributes;
		const b = l.attributeKey;
		let k = M;
		k[b] = E;
		const _ = wp.blocks.createBlock(n.name, k);
		let x = M;
		x[b] = o;
		let v = wp.blocks.createBlock("core/paragraph", x), y = M;
		y[b] = w;
		let I = [_, v, wp.blocks.createBlock(n.name, y)];
		return 0 === h.text.trim().length && (I = [_, v]), await wp.data.dispatch("core/block-editor").replaceBlock(c, I), v
	}

	function u() {
		return '<span id="' + (Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)) + '" class="wraiter-loading"></span>'
	}

	function z() {
		let e = wp.data.select("core/block-editor").getMultiSelectedBlockClientIds();
		return 0 === e.length && (e = [wp.data.select("core/block-editor").getSelectedBlockClientId()]), e
	}

	function g(e) {
		const t = wp.data.select("core/block-editor").getSelectionStart(), a = wp.data.select("core/block-editor").getSelectionEnd();
		if (t.clientId === a.clientId) return [t, a];
		let l = t, c = a;
		return e.length > 0 && e[0] === a.clientId && (l = a, c = t), [l, c]
	}

	function f(e) {
		let t = "";
		return "content" in e.attributes ? t = e.attributes.content : "citation" in e.attributes ? t = e.attributes.citation : "value" in e.attributes ? t = e.attributes.value : "values" in e.attributes ? t = e.attributes.values : "text" in e.attributes && (t = e.attributes.text), t
	}

	function b() {
		let e = z(), [t, a] = g(e);
		return k(e, t, a).trim()
	}

	function k(e, t, a) {
		let l = "";
		return e.forEach((e => {
			const c = wp.data.select("core/block-editor").getBlock(e);
			let r = f(c), n = wp.richText.create({html: r}).text, o = 0, i = n.length;
			t.clientId === e && "offset" in t && (o = t.offset), a.clientId === e && "offset" in a && (i = a.offset), a.offset !== t.offset && (n = n.substring(o, i)), l += "\n" + n, c.innerBlocks.length > 0 && (l += k(c.innerBlocks.map((e => e.clientId))))
		})), l
	}

	async function _(e, t, a, l) {
		E.siteUrl, E.nonce;
		const c = {action: "wraiter_light_ai_generate_content", type: t, language: a, "_ajax_nonce-wraiter_light_aicontent_nonce": E.wraiter_light_aicontent_nonce};
		try {
			l(!0);
			const e = await fetch(E.ajax_url, {method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded"}, body: new URLSearchParams(c)});
			if (!e.ok) throw new Error(await e.text());
			const t = await e.json();
			return 0 != t.success ? t.data[0] : t.data
		} catch (e) {
			throw new Error(await e.text())
		} finally {
			l(!1)
		}
	}

	async function x(e, t, a) {
		let l = "", c = E.selectedLanguage;
		try {
			l = await _(0, a, c)
		} catch (e) {
			return await wp.data.dispatch("core/block-editor").removeBlocks(t.clientId), void alert("An API error occurred with the following response body: \n\n" + e.message)
		}
		const r = l.replace(/\n/g, "<br>");
		let n = t.attributes;
		if (n.content = r, "" !== E.autocompletedTextBackgroundColor) {
			let e = n.style || {};
			e.color = e.color || {}, e.color.background = E.autocompletedTextBackgroundColor, n.style = e
		}
		wp.data.dispatch("core/block-editor").updateBlock(t.clientId, n)
	}

	async function v(e, t, a) {
		let l = "", c = E.selectedLanguage;
		try {
			l = await _(0, t, c, a)
		} catch (e) {
			return void alert("An API error occurred with the following response body: \n\n" + e.message)
		}
		const r = l.replace(/\n/g, "");
		return console.log("responseText", r), r
	}

	const y = (0, c.createHigherOrderComponent)((e => c => {
		if (!h.includes(c.name)) return (0, t.createElement)(e, c);
		let [n, i] = (0, t.useState)(!1), d = () => i(!1);
		const [u, z] = (0, t.useState)(!1), g = () => z(!0);
		let [f, k] = (0, t.useState)(!1), [_, y] = (0, t.useState)("");

		function I() {
			let e = b();
			return console.log("sel_text", e), e.length > 0 ? (y(e), e) : (y(""), !1)
		}

		function B() {
			return void 0 !== E.isOpenAIKeyValid && "0" !== E.isOpenAIKeyValid && "" !== E.isOpenAIKeyValid && !1 !== E.isOpenAIKeyValid
		}

		let T = [];
		Object.keys(E.prompts).forEach((function (e, t) {
			T.push({label: E.prompts[e].menuTitle, requiresTextSelection: E.prompts[e].requiresTextSelection, operationId: e, icon: E.prompts[e].icon, generatedTextPlacement: E.prompts[e].generatedTextPlacement})
		}));
		const C = {autocompleteType: T[0], сreateAutocompletionResponse: M, autocompleteResponse: v};
		return (0, t.createElement)(t.Fragment, null, (0, t.createElement)(e, c), (0, t.createElement)(a.BlockControls, {group: "block"}, (0, t.createElement)(l.ToolbarGroup, null, (0, t.createElement)(l.ToolbarDropdownMenu, {
			icon: o.aiEdit,
			label: (0, r.__)("Select how do you want AI to edit your content", "wraiter"),
			controls: T.map((e => ({
				title: e.label, icon: o[e.icon], onClick: async () => {
					if (console.log(B()), !B()) return void g();
					const t = e.generatedTextPlacement || "below";
					if (e.requiresTextSelection) {
						const a = I();
						if (a) {
							const l = await w(t);
							await x(e.operationId, l, a)
						}
					} else {
						const a = await w(t);
						await x(e.operationId, a, "")
					}
				}
			})))
		})), (0, t.createElement)(l.ToolbarGroup, null, (0, t.createElement)(l.ToolbarButton, {
			icon: o.wraiterEdit, label: (0, r.__)("AI-powered writing", "wraiter"), title: "Sample output", onClick: () => {
				B() ? (I(), k(!0)) : g()
			}
		})), n && (0, t.createElement)(l.Modal, {
			title: (0, r.__)("Missing Text Selection", "wraiter-light"),
			onRequestClose: d
		}, (0, t.createElement)("p", null, (0, r.__)("Please make sure to select the text you want to use for Wraiter to edit (or operate on).", "wraiter-light")), (0, t.createElement)("div", {
			style: {
				display: "flex",
				justifyContent: "flex-end"
			}
		}, (0, t.createElement)(l.Button, {
			variant: "primary", className: "components-button is-primary", onClick: function () {
				let e = T[0];
				const t = e.generatedTextPlacement || "below";
				if (e.requiresTextSelection) {
					const a = I();
					if (a) {
						const l = w(t);
						x(e.operationId, l, a)
					}
				} else {
					const a = w(t);
					x(e.operationId, a, "")
				}
			}, style: {float: "right"}
		}, (0, r.__)("Ok", "wraiter-light")), (0, t.createElement)(l.Button, {
			variant: "primary",
			className: "components-button is-primary",
			onClick: d,
			style: {float: "right"}
		}, (0, r.__)("Ok", "wraiter-light")))), u && (0, t.createElement)(l.Modal, {
			title: (0, r.__)("Wraiter is not properly configured", "wraiter-light"),
			onRequestClose: () => z(!1)
		}, (0, t.createElement)("p", null, (0, r.__)("It seems that Wraiter is not configured correctly. Please make sure to enter a valid API key in the settings.", "wraiter-light")), (0, t.createElement)("div", {
			style: {
				display: "flex",
				justifyContent: "flex-end"
			}
		}, (0, t.createElement)(l.Button, {
			variant: "primary", className: "components-button is-primary", onClick: function () {
				window.location.href = ""
			}, style: {float: "right"}
		}, (0, r.__)("Go to settings", "wraiter-light")))), function (e, a, c, n) {
			const [o, i] = (0, t.useState)(!0), [d, h] = (0, t.useState)(!1), [E, w] = (0, t.useState)(c);
			(0, t.useEffect)((() => {
				h(!1), w(c)
			}), [e]);
			const M = e => {
				h(e), console.log("WraiterNewPromptDisplay1", d)
			};
			return n.handleNewPromptClick = M, n.handleNewSelectText = e => {
				w(e), console.log("handleNewSelectText", e)
			}, n.setIsLoading = i, (0, t.useEffect)((() => {
				setTimeout((() => {
					i(!1)
				}), 2e3)
			}), []), e && (0, t.createElement)(l.Modal, {
				className: "wraiter-modal-window",
				title: (0, r.__)("AI", "wraiter"),
				onRequestClose: a
			}, o ? (0, t.createElement)(m, null) : d ? (0, t.createElement)(s, {NewPrompt: n}) : (0, t.createElement)(p, {selectText: E, handleNewPromptClick: M, closeMainWindowOpen: a, NewPrompt: n}))
		}(f, (() => k(!1)), _, C)), (0, t.createElement)(a.BlockControls, null))
	}), "withInspectorControl");
	window.wp.data, (0, e.addFilter)("editor.BlockEdit", "wraiter/controls", y)
})();