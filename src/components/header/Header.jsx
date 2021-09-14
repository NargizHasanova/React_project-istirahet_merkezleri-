import HeaderBottom from './HeaderBottom'
import HeaderTop from './HeaderTop'
import { useMediaQuery } from 'react-responsive'
import MobileHeader from '../mobile/MobileHeader'

export default function Header() {
    const isTablet768 = useMediaQuery({ query: '(max-width: 768px)' })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' })
    const isMobile425 = useMediaQuery({ query: '(max-width: 425px)' })
    return (
        <>
            {isBigScreen &&
                <header>
                    <HeaderTop />
                    <HeaderBottom />
                </header>
            }
            {isTablet768 && <MobileHeader />}
        </>
    )
}
