import { BrowserRouter, HashRouter } from 'react-router-dom';

const UseHash = import.meta.env.VITE_USE_HASHROUTER === 'true';

export const AppRouter = ({ children }: { children: React.ReactNode }) =>
  UseHash ? <HashRouter>{children}</HashRouter> : <BrowserRouter>{children}</BrowserRouter>;