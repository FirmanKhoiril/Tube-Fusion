import ScrollToTop from "react-scroll-to-top";
import { GoMoveToTop } from "react-icons/go";

const CustomScrollToTop= () => {

    const Scrolling = () => {
        return (
          <div
    style={{
      backgroundColor: 'rgba(16, 185, 129, 1)',
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'background-color 200ms ease-in-out',
      borderRadius: 4
    }}
    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(16, 185, 129, 0.8)')}
    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(16, 185, 129, 1)')}
  >
    <GoMoveToTop size={24} color="black" />
  </div>
        )
      }

  return (
    <ScrollToTop top={40} component={<Scrolling />} smooth />
  )
}

export default CustomScrollToTop