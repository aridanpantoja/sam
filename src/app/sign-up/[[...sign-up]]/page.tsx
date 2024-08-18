import { buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'
import Link from 'next/link'
import { FaBuildingUser } from 'react-icons/fa6'

export default function SignUpPage() {
  return (
    <Card className="mx-4 w-full max-w-none sm:mx-0 sm:max-w-96">
      <CardHeader className="items-center text-center">
        <FaBuildingUser className="size-14 text-primary" />
        <h1 className="text-2xl font-bold">Registrar no SAM</h1>
        <CardDescription>
          Para ter acesso ao SAM, entre em contato com o responsável pelo setor
          de TI
        </CardDescription>
      </CardHeader>
      <CardFooter className="">
        <Link
          href="/sign-in"
          className={buttonVariants({ className: 'w-full' })}
        >
          Entrar na conta
        </Link>
      </CardFooter>
    </Card>
  )
}
