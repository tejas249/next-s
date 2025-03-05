

export default function Home() {
  return (
    <div>
       <Button>
        Signin
       </Button>
       <Button>
        SignUp
       </Button>
    </div>
  );
}

export function Button({children}){
  return <Button>
    {children}
  </Button>
}

