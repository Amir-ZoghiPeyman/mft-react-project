import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout"
import MainPage from "./pages/mainPage"
import SingleProductPage from "./pages/singleProductPage"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/products/:productId" element={<SingleProductPage />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </QueryClientProvider>
  )
}

