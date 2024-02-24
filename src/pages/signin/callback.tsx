import styled from 'styled-components'
import { useState, useEffect } from 'preact/hooks'
import { route } from 'preact-router'

import { Main, Logo, Text } from '@/styles/components'

export default function SignInCallback({
  code,
  retry,
}: {
  code: string
  retry: string
}) {
  const [didRetry, setDidRetry] = useState(false)

  useEffect(() => {
    if (!code) {
      route('/signin/fail', true)
      return
    }

    if (retry) {
      setDidRetry(true)
    }

    window.location.assign(`waktalk://signin?code=${code}`)
  }, [code, retry])

  return (
    <Main>
      <Logo
        onClick={() => {
          window.location.href =
            'https://cafe.naver.com/steamindiegame/15199955'
        }}
      />

      <ActionSect>
        {didRetry ? (
          <Text>
            WAKTALK 앱을 다시 실행했습니다.
            <br />
            WAKTALK 앱에서 로그인을 완료해 주세요.
          </Text>
        ) : (
          <Text>
            사용 중이던 WAKTALK 앱으로 이동하여
            <br />
            로그인을 완료해 주세요.
          </Text>
        )}

        {didRetry ? (
          <HelpButton
            onClick={() => {
              setDidRetry(true)
              window.location.href = 'mailto:support@waktalk.xyz'
            }}
          >
            WAKTALK 팀에 문의하기
          </HelpButton>
        ) : (
          <HelpButton
            onClick={() => {
              setDidRetry(true)
              window.location.assign(`waktalk://signin?code=${code}`)
            }}
          >
            로그인이 안 되나요?
          </HelpButton>
        )}
      </ActionSect>
    </Main>
  )
}

const ActionSect = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
`

const HelpButton = styled.div`
  width: fit-content;
  height: 40px;
  padding: 4px 32px;

  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #999999;
  font-size: 16px;

  border-radius: 9999px;
  border: 1px solid #f2f2f7;
  cursor: pointer;
`
