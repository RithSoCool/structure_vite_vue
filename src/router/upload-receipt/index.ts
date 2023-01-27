import UploadReceiptList from '../../views/upload-receipt/UploadReceiptList.vue'
import UploadReceiptDetail from '../../views/upload-receipt/UploadReceiptDetail.vue'

export const uploadReceipt = [
    {
        path: '/upload-receipt',
        component: UploadReceiptList,
        name: 'Upload Receipt List',
        meta: {
            entry: 'center',
            exit: 'right',
        },
    },
    {
        path: '/upload-detail',
        component: UploadReceiptDetail,
        name: 'Upload Receipt Detail',
        meta: {
            entry: 'center',
            exit: 'right',
            title: 'อัปโหลดใบเสร็จ',
            show: true,
        },
    },
]
