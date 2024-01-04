const BackEnd = {
  name: "Online Food Delivery",
  children: [
    {
      name: "Feedback service",
      children: [
        {
          name: "Fronend",
          children: [
            { name: "Custom Feedback page" },
            { name: "Feed Component on the Food Card" },
          ],
        },
        {
          name: "Backend",
        },
      ],
    },
    {
      name: "Sub Categories",
      children: [
        {
          name: "Fronend",
        },
        {
          name: "Backend",
        },
      ],
    },
    {
      name: "Create Vendor",
      children: [
        {
          name: "Fronend",
          children: [
            { name: "Home" },
            { name: "Dashboard" },
            { name: "Menu" },
            { name: "Orders" },
            { name: "Settings" },
            { name: "Cookies && details" },
          ],
        },
        {
          name: "Backend",
          children: [
            { name: "handle 15m refresh token" },
            { name: "Gain data for Dashboard" },
            { name: "Overview the vendor service" },
          ],
        },
      ],
    },
    {
      name: "Create Deliveryman",
      children: [
        {
          name: "Fronend",
          children: [
            {
              name: "Dashboard",
              children: [
                { name: "Overview" },
                { name: "Performance" },
                { name: "Orders" },
                { name: "Feedbacks" },
              ],
            },
          ],
        },
        {
          name: "Backend",
          children: [
            { name: "Gain data for Overview" },
            { name: "Handle Cookie" },
          ],
        },
      ],
    },
    {
      name: "Admin Functions",
      children: [
        {
          name: "Fronend",
          children: [
            { name: "Last Order ==> see more" },
            { name: "Order (page) ==> see more" },
            { name: "Employees ==> modal" },
          ],
        },
        {
          name: "Backend",
          children: [{ name: "Gain data for Overview" }],
        },
      ],
    },
    {
      name: "Create Cart",
      children: [
        {
          name: "Fronend",
          children: [
            { name: "Shipping info page" },
            { name: "Define the place of Cart Component" },
            { name: "Withdraw & Deposit" },
          ],
        },
        {
          name: "Backend",
          children: [{ name: "Handle the Shopping service" }],
        },
      ],
    },
    {
      name: "Order Service",
      children: [
        {
          name: "Fronend",
          children: [
            { name: "Order History" },
            { name: "Order Component" },
            { name: "Custom Order" },
          ],
        },
        {
          name: "Backend",
          children: [{ name: "Communicate between services" }],
        },
      ],
    },
    {
      name: "Before Nginx",
      children: [
        {
          name: "Fronend",
          children: [
            { name: "Responsive" },
            { name: "The whole functionalities" },
            { name: "Refactoring" },
          ],
        },
        {
          name: "Backend",
          children: [
            { name: "Error handler" },
            { name: "Overview the whole backend" },
          ],
        },
      ],
    },
    {
      name: "Nginx",
      children: [
        {
          name: "Fronend",
          children: [{ name: "Modify all URLs based on Nginx" }],
        },
        {
          name: "Backend",
          children: [
            { name: "Handle Nginx" },
            { name: "Handle Docker" },
            { name: "Handle K8s" },
            { name: "Handle Test app" },
          ],
        },
      ],
    },
    {
      name: "Deploy",
      children: [
        {
          name: "Deploy",
        },
        {
          name: "Piar it Partly",
        },
      ],
    },
  ],
};

export default BackEnd;
