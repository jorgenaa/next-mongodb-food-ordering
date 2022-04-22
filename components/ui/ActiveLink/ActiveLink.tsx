import { NextPage } from 'next';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router'
import { Children, cloneElement } from 'react';

interface NavLinkProps extends LinkProps {
    children: React.ReactElement
    activeClassName: any
}

const ActiveLink: NextPage<NavLinkProps > = ({ children, activeClassName, ...props}) => {
    const { asPath } = useRouter()
    const child: any = Children.only(children)
    const childClassName = child.props.className || ''

    const className =
        asPath === props.href || asPath === props.as
        ? `${childClassName} ${activeClassName}`.trim()
        : childClassName
    

    return (
        <Link {...props}>
            {cloneElement(child, {
            className: className || null,
            })}
        </Link>
    )}


export default ActiveLink