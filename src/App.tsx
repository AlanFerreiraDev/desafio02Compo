import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { GlobalProvider } from './contexts/GlobalContext';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

export function App() {
  return (
    <GlobalProvider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <Content />
      </div>
    </GlobalProvider>
  );
}
