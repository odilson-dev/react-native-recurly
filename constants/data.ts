import { icons } from "./icon";

export const tabs: AppTab[] = [
  {
    name: "home",
    title: "Home",
    icon: icons.home,
  },
  {
    name: "insights",
    title: "Insights",
    icon: icons.activity,
  },
  {
    name: "settings",
    title: "Settings",
    icon: icons.setting,
  },
  {
    name: "subscriptions",
    title: "Subscriptions",
    icon: icons.wallet,
  },
];

export const subscriptions: Subscription[] = [
  {
    id: "1",
    name: "Spotify",
    price: 10,
    currency: "USD",
    billing: "Monthly",
    category: "Music",
    icon: icons.spotify,
    plan: "Premium",
    paymentMethod: "Visa",
    status: "Active",
    startDate: "2023-01-01",
    renewalDate: "2023-02-01",
    color: "#1db954",
  },

  {
    id: "2",
    name: "Dropbox",
    price: 10,
    currency: "USD",
    billing: "Monthly",
    category: "Productivity",
    icon: icons.dropbox,
    plan: "Premium",
    paymentMethod: "Visa",
    status: "Active",
    startDate: "2023-01-01",
    renewalDate: "2023-02-01",
    color: "#0061ff",
  },
];
