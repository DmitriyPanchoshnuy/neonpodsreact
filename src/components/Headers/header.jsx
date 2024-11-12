
import './header.css';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <div className='mainContent'>
            <Link to={'/'}>
                <h1 className='neonlogo'>Neon Pods</h1>
            </Link>
        </div>
    )
}