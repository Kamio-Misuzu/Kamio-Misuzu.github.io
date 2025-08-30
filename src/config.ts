import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	FriendsLinkConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Kamio-Misuzu",
	subtitle: "观铃",
	lang: "zh_CN", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 200, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: [
			// {
			// 	src: "src/assets/images/demo-bg.png"
			// },
			// {
			// 	src: "src/assets/images/151933.jpg"
			// },
			{
				src: "https://t.alcy.cc/moez"
			}
		], 
		
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		// {
		//   src: 'assets/images/demo-bg.png',    // Path of the favicon, relative to the /public directory
		//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		LinkPreset.Friends,
		{
			name: "其他",
			url: "#",
			children: [
				{
					name: "时间线",
					url: "/timeline/",
				},
			],
		},
		// {
		// 	name: "GitHub",
		// 	url: "https://github.com/Kamio-Misuzu", // Internal links should not include the base path, as it is automatically added
		// 	external: true, // Show an external link icon and will open in a new tab
		// },
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/demo-avatar.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "Kamio-Misuzu",
	bio: "曲中思念今犹在, 不见当年梦中人",
	links: [

		{
			name: "bilibili",
			icon: "fa6-brands:bilibili",
			url: "https://space.bilibili.com/34160150",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/Kamio-Misuzu",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};

export const FriendslinkConfig: FriendsLinkConfig = {
	enable: true,
	title: "友链",
	description: "欢迎和我交换友链",
	friends: [
		{
			name: "Kamio-Misuzu",
			url: "https://github.com/Kamio-Misuzu",
			description: "Kamio-Misuzu的Github主页",
			avatar: "assets/images/demo-avatar.jpg",
		},
		{
			name: "Kamio-Misuzu",
			url: "https://space.bilibili.com/34160150",
			description: "Kamio-Misuzu的bilibili主页",
			avatar: "assets/images/demo-avatar.jpg",
		},
		{
			name: "Astro",
			url: "Astro主页",
			description: "https://astro.build/",
			avatar: "https://avatars.githubusercontent.com/u/44914786?s=48&v=4",
		},
		{
			name: "fuwari",
			url: "https://fuwari.vercel.app/",
			description: "fuwari博客页面",
			avatar: "https://fuwari.vercel.app/_astro/demo-avatar.CxcI0ivM_1nbuVe.webp",
		},

	],
};
