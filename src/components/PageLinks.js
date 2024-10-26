import { pageLinks } from '../data';
import PageLink from './PageLink';

const PageLinks = ({ parentClass, childClass }) => {
  return (
    <ul className={parentClass} id='nav-links'>
      {pageLinks.map((link) => (
        <PageLink key={link.id} className={childClass} {...link} />
      ))}
    </ul>
  );
};
export default PageLinks;
