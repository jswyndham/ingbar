import { createContext, useState, useEffect, useMemo } from 'react';

export const AnimationStateContext = createContext();

export const AnimationProvider = ({ children }) => {
	const [hasAnimated, setHasAnimated] = useState(false);

	useEffect(() => {
		const animated = sessionStorage.getItem('hasAnimated');
		if (animated) {
			setHasAnimated(true);
		}
	}, []);

	const value = useMemo(
		() => ({
			hasAnimated,
			animate: () => {
				if (!hasAnimated) {
					setHasAnimated(true);
					sessionStorage.setItem('hasAnimated', 'true');
				}
			},
		}),
		[hasAnimated]
	);

	return (
		<AnimationStateContext.Provider value={value}>
			{children}
		</AnimationStateContext.Provider>
	);
};
