import Card from './Card.tsx';

export default function QuoteCard(props) {
  return (
    <Card className={props.className} header={props.header} footer={props.footer}>
      {props.children}
      <div className="flex flex-col items-end">
        <p className="my-0"><b>~ {props.person}</b></p>
        <p className="my-0"><em>{props.title}</em></p>
      </div>
    </Card>
  );
}
