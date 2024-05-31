# Jest React Test

![Next.js Logo](https://nextjs.org/static/favicon.ico)

![Jest](https://raw.githubusercontent.com/vercel/next.js/main/examples/jest/vercel.svg)

## Overview

This project is an example of using [Jest](https://jestjs.io/) with [Next.js](https://nextjs.org/).

## WelcomeMessage

This is a simple component that produces a simple message.

```jsx
export default function WelcomeMessage({ message }) {
  return <h1>{message}</h1>;
}
```

## WelcomeMessage Test

```jsx
import { render } from "@testing-library/react";

import WelcomeMessage from "./WelcomeMessage";

describe("WelcomeMessage", () => {
  it("should render a welcome message", () => {
    const { getByText } = render(<WelcomeMessage message="Hello, Jest!" />);

    expect(getByText("Hello, Jest!")).toBeInTheDocument();
  });
});
```

## ToggleText

This is a simple component that produces a simple message.

```jsx
export default function ToggleText({ text }) {
  return <h1>{text}</h1>;
}
```

## ToggleText Test

```jsx
import { render } from "@testing-library/react";
import ToggleText from "./ToggleText";

describe("ToggleText", () => {
  it("should render a welcome message", () => {
    const { getByText } = render(<ToggleText text="Hello, Jest!" />);
    expect(getByText("Hello, Jest!")).toBeInTheDocument();
  });
});
```

## Conclusion

Congratulations! You have successfully created a [Jest](https://jestjs.io/) project with [Next.js](https://nextjs.org/).

## Next Steps

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contributing

If you'd like to contribute to this project, please see our [Contributing](https://github.com/vercel/next.js/tree/canary/examples/jest) section.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
