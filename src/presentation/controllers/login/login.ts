import { Controller,HttpRequest,HttpResponse } from '../../protocols'
import { badRequest } from '../../helpers/http-helpers'
import { MissingParamError, InvalidParamError } from '../../erros'
import { EmailValidator } from '../signup/signup-protocols'

export class LoginController implements Controller {
  private readonly emailValidator: EmailValidator
  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const fields = ['email','password']
    for (const field of fields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
    const { email } = httpRequest.body
    const isValidEmail = this.emailValidator.isValid(email)
    if (!isValidEmail) {
      return badRequest(new InvalidParamError('email'))
    }
    return {
      statusCode: 200,
      body: {}
    }
  }
}
