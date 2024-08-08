import Container from '@components/organisms/Container'
import HomePage from '@components/organisms/Home'

export const metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <Container>
      <HomePage />
    </Container>
  )
}
