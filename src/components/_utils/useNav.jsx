import { useRef, useContext, useEffect } from 'react';
import useIntersection from './useIntersection';
import { NavContext } from '../navbar/nav-context'

export const useNav = navLinkId => {
	const ref = useRef(null);

	const { setActiveNavLinkId } = useContext(NavContext);

	const isOnScreen = useIntersection(ref);

	useEffect(() => {
		if (isOnScreen) {
			setActiveNavLinkId(navLinkId);
		}
	}, [isOnScreen, setActiveNavLinkId, navLinkId]);

	return ref;
};