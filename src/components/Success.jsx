import {
  CardGroup,
  Card,
  CardImg,
  CardBody,
  Button,
  CardSubtitle,
  CardTitle,
  CardText,
} from 'reactstrap';

export default function Success() {
 return (
    <>
        <h1>Hoş Geldiniz!</h1>

        <CardGroup>
        <Card>
            <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
            />
            <CardBody>
            <CardTitle tag="h5">
                Card 1
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                Card 1
            </CardSubtitle>
            <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </CardText>
            <Button>
                Button
            </Button>
            </CardBody>
        </Card>
        <Card>
            <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/181"
            top
            width="100%"
            />
            <CardBody>
            <CardTitle tag="h5">
                Card 2
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                Card 2
            </CardSubtitle>
            <CardText>
                This card has supporting text below as a natural lead-in to additional content.
            </CardText>
            <Button>
                Button
            </Button>
            </CardBody>
        </Card>
        <Card>
            <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/182"
            top
            width="100%"
            />
            <CardBody>
            <CardTitle tag="h5">
                Card 3
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                Card 3
            </CardSubtitle>
            <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
            </CardText>
            <Button>
                Button
            </Button>
            </CardBody>
        </Card>
        </CardGroup>
    </>
 )
}