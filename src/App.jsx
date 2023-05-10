import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";
import { Contact } from "./pages/contact";
import { ContactForm } from "./pages/contactForm";
import { ErrorPage } from "./pages/errorPage";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contact/:id",
        element: <Contact />,
      },
      {
        path: "add",
        element: <ContactForm />,
      },
      {
        path: "edit",
        element: <ContactForm />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
