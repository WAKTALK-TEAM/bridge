import { Main, Logo, Text } from '@/styles/components'

export default function SignInFailure() {
  return (
    <Main>
      <Logo
        onClick={() => {
          window.location.href =
            'https://cafe.naver.com/steamindiegame/15199955'
        }}
      />

      <Text>
        로그인에 실패했습니다.
        <br />
        WAKTALK 앱에서 다시 로그인 해 주세요.
      </Text>
    </Main>
  )
}
