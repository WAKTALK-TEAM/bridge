import { useEffect } from 'preact/hooks'
import { Main, Logo, Text } from '@/styles/components'

export default function Home() {
  useEffect(() => {
    window.location.href = 'https://cafe.naver.com/steamindiegame.cafe'
  })

  return (
    <Main>
      <Logo
        onClick={() => {
          window.location.href =
            'https://cafe.naver.com/steamindiegame/15199955'
        }}
      />

      <Text>왁물원으로 이동합니다.</Text>
    </Main>
  )
}
