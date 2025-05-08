import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./layout"
import MainPage from "./pages/mainPage"
import SingleProductPage from "./pages/singleProductPage"
import NoMatch from "./pages/noMatch";
import CartPage from "./pages/cartPage";

const queryClient = new QueryClient()
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/products/:productId" element={<SingleProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

