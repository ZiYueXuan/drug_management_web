import Modal from "antd/es/modal/Modal";
import Card from "antd/es/card/Card";
export default function DrugDetails(props) {
    return (
        <Modal 
            {...props}
            title='详细信息'
            okButtonProps={{ style: { display: 'none' } }}
            cancelButtonProps={{ style: { display: 'none' } }}
            width='90%'
            style={{ top: '0' }}
        >
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <Card title='名称' >{props?.drug?.name}</Card>
                <Card title='药品ID' >{props?.drug?.drugId}</Card>
                <Card title='药品批准编号' >{props?.drug?.approvalNumber}</Card>
                <Card title='执行标准' >{props?.drug?.executiveStandard}</Card>
                <Card title='主要成分' >{props?.drug?.component}</Card>
                <Card title='适应症' >{props?.drug?.indication}</Card>
                <Card title='药物相互作用' >{props?.drug?.interact}</Card>
                <Card title='性状' >{props?.drug?.properties}</Card>
                <Card title='有效期' >{props?.drug?.validityTime}</Card>
                <Card title='用法用量' >{props?.drug?.useConsumption}</Card>
                <Card title='禁忌' >{props?.drug?.taboo}</Card>
                <Card title='不良反应' >{props?.drug?.adverseReaction}</Card>
                <Card title='贮藏' >{props?.drug?.storeUp}</Card>
                <Card title='注意事项' >{props?.drug?.matters}</Card>
            </div>
        </Modal>
    )
}