import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import HelloWorld from '../../app/components/HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders the provided message', async () => {
    await renderSuspended(HelloWorld, {
      props: {
        message: 'hello from the server',
      },
    })

    expect(screen.getByText('hello from the server')).toBeTruthy()
  })
})
