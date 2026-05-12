import type { Product } from '../types/product'

export const CONTACT_URL = 'https://zalo.me'

export const mockProducts: Product[] = [
  {
    id: 'airpods-pro-2',
    name: 'AirPods Pro 2 USB-C',
    price: '3.190.000đ',
    imageUrl:
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=900&q=80',
    referenceUrl: 'https://www.apple.com/airpods-pro/',
    status: 'available',
    note: 'Âm thanh ổn, pin tốt, ngoại hình rất sạch. Hợp nếu muốn lên đời tai nghe xịn mà đỡ tốn.',
    contactUrl: CONTACT_URL,
  },
  {
    id: 'mx-master-3s',
    name: 'Logitech MX Master 3S',
    price: '1.650.000đ',
    imageUrl:
      'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=900&q=80',
    referenceUrl: 'https://www.logitech.com/products/mice/mx-master-3s.html',
    status: 'available',
    note: 'Chuột làm việc siêu sướng, cuộn êm, pin trâu. Hợp dân văn phòng hoặc dev.',
    contactUrl: CONTACT_URL,
  },
  {
    id: 'kindle-paperwhite',
    name: 'Kindle Paperwhite 11th',
    price: '2.450.000đ',
    imageUrl:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80',
    referenceUrl: 'https://www.amazon.com/kindle-paperwhite/',
    status: 'sold',
    note: 'Màn đẹp, nhẹ, pin lâu. Mình đã bán nhưng vẫn giữ lại để bạn tham khảo vibe chọn đồ.',
    contactUrl: CONTACT_URL,
  },
  {
    id: 'desk-lamp',
    name: 'Đèn bàn chống chói',
    price: '590.000đ',
    imageUrl:
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=80',
    referenceUrl: 'https://www.ikea.com/',
    status: 'available',
    note: 'Ánh sáng dịu, hợp góc học tập hoặc làm việc buổi tối.',
    contactUrl: CONTACT_URL,
  },
  {
    id: 'monitor-arm',
    name: 'Monitor Arm North Bayou F80',
    price: '420.000đ',
    imageUrl:
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80',
    referenceUrl: 'https://northbayou.com/',
    status: 'available',
    note: 'Tiết kiệm diện tích bàn cực tốt, nâng hạ mượt, còn cứng cáp.',
    contactUrl: CONTACT_URL,
  },
  {
    id: 'fujifilm-mini',
    name: 'Máy chụp ảnh mini Instax',
    price: '1.180.000đ',
    imageUrl:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80',
    referenceUrl: 'https://instax.com/',
    status: 'available',
    note: 'Đồ vui để đi chơi, chụp nhóm, làm quà. Ngoại hình đẹp, hoạt động bình thường.',
    contactUrl: CONTACT_URL,
  },
  {
    id: 'ergonomic-chair',
    name: 'Ghế công thái học lưng lưới',
    price: '2.890.000đ',
    imageUrl:
      'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=900&q=80',
    referenceUrl: 'https://www.ikea.com/',
    status: 'sold',
    note: 'Đã chốt rồi nhưng mình để lại làm mẫu card sold state cho site.',
    contactUrl: CONTACT_URL,
  },
  {
    id: 'switch-lite',
    name: 'Nintendo Switch Lite',
    price: '3.750.000đ',
    imageUrl:
      'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=900&q=80',
    referenceUrl: 'https://www.nintendo.com/us/switch/lite/',
    status: 'available',
    note: 'Máy gọn, pin ổn, phù hợp ai muốn chơi game giải trí nhẹ nhàng.',
    contactUrl: CONTACT_URL,
  },
]
