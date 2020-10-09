import { LogControllerDecorator } from './log'
import { Controller, HttpResponse, HttpRequest } from '../../presentation/protocols'

interface SutTypes{
  sut: LogControllerDecorator
  controllerStub: Controller
}

const makeController = (): Controller => {
  class ControllerStub implements Controller {
    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
      return new Promise(resolve => resolve({
        statusCode: 200,
        body: {
          message: 'Sucess'
        }
      }))
    }
  }
  return new ControllerStub()
}

const makeSut = (): SutTypes => {
  const controllerStub = makeController()
  const sut = new LogControllerDecorator(controllerStub)

  return {
    sut,
    controllerStub
  }
}

describe('LogController Decorator',() => {
  test('Should call controller handle',async () => {
    const { sut,controllerStub } = makeSut()
    const handleSpy = jest.spyOn(controllerStub,'handle')
    const httpRequest = {
      body: {
        name: 'valid_name',
        email: 'valid@mail.com',
        password: 'valid_password',
        passwordConformation: 'valid_password'
      }
    }

    await sut.handle(httpRequest)

    expect(handleSpy).toHaveBeenCalledWith(httpRequest)
  })
})
