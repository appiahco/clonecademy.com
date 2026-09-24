// Icons referenced by name from content (roles, products). Components that
// use an icon directly should import it from Phosphor instead.
import AmazonLogo from "@phosphor-icons/core/assets/regular/amazon-logo.svg";
import BracketsCurly from "@phosphor-icons/core/assets/regular/brackets-curly.svg";
import Brain from "@phosphor-icons/core/assets/regular/brain.svg";
import Browser from "@phosphor-icons/core/assets/regular/browser.svg";
import Cloud from "@phosphor-icons/core/assets/regular/cloud.svg";
import InstagramLogo from "@phosphor-icons/core/assets/regular/instagram-logo.svg";

export const icons = {
	"amazon-logo": AmazonLogo,
	"brackets-curly": BracketsCurly,
	brain: Brain,
	browser: Browser,
	cloud: Cloud,
	"instagram-logo": InstagramLogo,
};

export type IconName = keyof typeof icons;

export const iconNames = Object.keys(icons) as [IconName, ...IconName[]];
