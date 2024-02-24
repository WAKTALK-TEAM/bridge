import { Main, Logo, Text } from '@/styles/components'

export default function NotFound() {
  return (
    <Main>
      <Logo
        onClick={() => {
          window.location.href =
            'https://cafe.naver.com/steamindiegame/15199955'
        }}
      />

      <Text>잘못된 접근입니다.</Text>
    </Main>
  )
}
