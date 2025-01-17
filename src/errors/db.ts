import Http from '@/errors/http'

export class EmptyError extends Http {
  constructor (key: string) {
    const message = `[${key}] 에 해당되는 아이템은 존제하지 않습니다.`
    super(404, message)
  }
}
