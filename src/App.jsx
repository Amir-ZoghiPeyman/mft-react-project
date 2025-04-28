import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./layout"
import MainPage from "./pages/mainPage"
import SingleProductPage from "./pages/singleProductPage"
import NoMatch from "./pages/noMatch";

const queryClient = new QueryClient()
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/products/:productId" element={<SingleProductPage />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </QueryClientProvider>
  )
}

