'use client'

import React, { useEffect, useRef } from 'react'

interface IconProps extends React.SVGAttributes<HTMLOrSVGElement> {
  name: string
  width?: number
  height?: number
  color?: string
}

const replaceColor = (svgString: string, newColor?: string) => {
  if (newColor) {
    const regex = /fill="(#[A-Fa-f0-9]{6})|(none)"/g
    const replacement = `fill="var(${newColor})"`
    return svgString.replace(regex, replacement)
  }
  return svgString
}

export const Icon: React.FC<IconProps> = ({ name, width, height, color, ...props }) => {
  const svgRef = useRef<SVGSVGElement>(null)
  useEffect(() => {
    const svgElement = async () => await import(`../../../public/icons/${name}.svg`)

    svgElement().then(svg => {
      if (svgRef.current) {
        svgRef.current.innerHTML = replaceColor(svg.default, color)
      }
    })
  }, [name, color])

  return <svg width={width} height={height} ref={svgRef} {...props}></svg>
}
