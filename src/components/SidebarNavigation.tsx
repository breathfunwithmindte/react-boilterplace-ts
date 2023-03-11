import { useNavigate } from 'react-router-dom';

interface Props {}

const SidebarNavigation = (props: Props) => {
  const navigate = useNavigate();

  const handleRedirect = function (e: React.MouseEvent<HTMLAnchorElement>, path: string) :void {
    e.preventDefault();
    navigate(path);
  };

  return (
    <nav className="sidebar-navigation-container">
      <h1 className="f-size-2 sp-2">Your company logo</h1>
      <hr />
      <ul>
        <a href="/" onClick={(e) => handleRedirect(e, '/')}>
          <li className="btn hover-4 my-3 sp-3">Dashboard</li>
        </a>
        <a href="/itsm/incident/new" onClick={(e) => handleRedirect(e, '/itsm/incident/new')}>
          <li className="btn hover-4 my-3 sp-3">New Incident</li>
        </a>
        <a href="/itsm/incident/list" onClick={(e) => handleRedirect(e, '/itsm/incident/list')}>
          <li className="btn hover-4 my-3 sp-3">Incidents</li>
        </a>
        <a href="#">
          <li className="btn hover-4 my-3 sp-3">Help</li>
        </a>
      </ul>
    </nav>
  );
};

export default SidebarNavigation;
