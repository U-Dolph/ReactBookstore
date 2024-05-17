type Props = {
  children: React.ReactNode;
  css?: string;
}

export default function AccentDecorator({ children, css }: Props) {
  return (
    <div className={css}>
      {children}
    </div>
  )
}
