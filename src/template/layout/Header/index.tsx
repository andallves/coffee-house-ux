import './styles.scss';

export const Header = () => {
	return (
		<header className='header-container'>
			<h1 className='header-title'>Coffee Shop</h1>
			<div className='header-divider'>
				<img src='img/divider.png' alt='divisor'/>
			</div>
			<span className='header-description'>Um refúgio para amantes de café, aroma e aconchego em cada xícara.</span>
		</header>
	)
}