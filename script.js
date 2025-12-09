// MÃ JAVASCRIPT ĐƯỢC ĐẶT TRỰC TIẾP Ở ĐÂY HOẶC TRONG FILE SCRIPT.JS
// Lưu ý: Đã loại bỏ các câu hỏi mẫu ban đầu của bạn và thay thế bằng 274 câu hỏi về Kiến trúc máy tính.

const quizData = [
    {
        question: "Tất cả các thanh ghi và đường truyền dữ liệu trong 80286 có độ dài bao nhiêu?",
        options: ["8 bit", "16 bit", "32 bit", "64 bit"],
        answer: "16 bit"
    },
    {
        question: "Cơ chế xử lý đường ống (pipeline) của bộ vi xử lý 80286 có tác dụng gì?",
        options: ["Làm tăng tốc độ truy cập bộ nhớ RAM", "Làm tăng tốc độ truy cập bộ nhớ ROM", "Cho phép truy cập đồng thời cả ROM và RAM", "Cho phép bộ vi xử lý tận dụng thời gian thực hiện lệnh trước để đọc lệnh tiếp theo từ bộ nhớ"],
        answer: "Cho phép bộ vi xử lý tận dụng thời gian thực hiện lệnh trước để đọc lệnh tiếp theo từ bộ nhớ"
    },
    {
        question: "Chức năng của vi mạch 8284 là:",
        options: ["Tạo tín hiệu Reset bộ vi xử lý", "Tạo tín hiệu xung nhịp đồng hồ", "Tạo tín hiệu điều khiển hệ thống Bus", "Tạo tín hiệu điều khiển hệ thống vào ra"],
        answer: "Tạo tín hiệu xung nhịp đồng hồ"
    },
    {
        question: "Tốc độ truy nhập của các thanh ghi so với bộ nhớ RAM thì:",
        options: ["Nhanh hơn", "Chậm hơn", "Xấp xỉ nhau", "Không so sánh được"],
        answer: "Nhanh hơn"
    },
    {
        question: "Khi muốn đọc lệnh tiếp theo từ ROM thì trước hết nội dung thanh ghi nào cần tăng lên?",
        options: ["IP", "IP và SI", "DI", "SP"],
        answer: "IP"
    },
    {
        question: "Thanh ghi nào trong các thanh ghi sau đây thuộc nhóm thanh ghi con trỏ:",
        options: ["DI", "CX", "DS", "BP"],
        answer: "BP"
    },
    {
        question: "Thanh ghi nào trong các thanh ghi sau đây thuộc nhóm thanh ghi chỉ số:",
        options: ["CI", "CX", "DS", "BP"],
        answer: "BP"
    },
    {
        question: "Thanh ghi nào trong các thanh ghi sau đây thuộc nhóm thanh ghi dữ liệu:",
        options: ["CI", "DX", "DS", "BP"],
        answer: "DX"
    },
    {
        question: "Thanh ghi nào trong các thanh ghi sau đây thuộc nhóm thanh ghi đoạn:",
        options: ["CI", "CX", "DS", "BP"],
        answer: "DS"
    },
    {
        question: "Thanh ghi nào trong các thanh ghi sau đây là thanh ghi đếm?",
        options: ["CI", "CX", "IP", "CS"],
        answer: "CX"
    },
    {
        question: "Thanh ghi nào trong các thanh ghi sau đây là thanh ghi đoạn ngăn xếp?",
        options: ["SP", "CS", "SS", "DS"],
        answer: "SS"
    },
    {
        question: "Thanh ghi nào trong các thanh ghi sau đây là thanh ghi chỉ số nguồn?",
        options: ["SI", "CS", "DI", "SP"],
        answer: "SI"
    },
    {
        question: "Thanh ghi nào trong các thanh ghi sau đây là thanh ghi chỉ số đích:",
        options: ["DI", "SI", "DS", "IP"],
        answer: "DI"
    },
    {
        question: "Thanh ghi nào trong các thanh ghi sau đây là thanh ghi con trỏ ngăn xếp?",
        options: ["SI", "SP", "IP", "SS"],
        answer: "SP"
    },
    {
        question: "Thanh ghi IP cho biết thông tin gì?",
        options: ["Địa chỉ bắt đầu của đoạn chương trình hiện hành trong bộ nhớ", "Địa chỉ segment của lệnh kế tiếp sẽ được thực hiện", "Địa chỉ offset của lệnh kế tiếp sẽ được thực hiện", "Địa chỉ dữ liệu dạng chuỗi phục vụ cho chương trình hiện hành"],
        answer: "Địa chỉ offset của lệnh kế tiếp sẽ được thực hiện"
    },
    {
        question: "Thanh ghi CS cho biết thông tin gì?",
        options: ["Địa chỉ bắt đầu của đoạn chương trình hiện hành trong bộ nhớ", "Địa chỉ bắt đầu của đoạn dữ liệu phục vụ cho chương trình hiện hành", "Địa chỉ bắt đầu của đoạn ngăn xếp trong bộ nhớ", "Địa chỉ dữ liệu dạng chuỗi phục vụ cho chương trình hiện hành"],
        answer: "Địa chỉ bắt đầu của đoạn chương trình hiện hành trong bộ nhớ"
    },
    {
        question: "Thanh ghi DS cho biết thông tin gì?",
        options: ["Địa chỉ bắt đầu của đoạn chương trình hiện hành trong bộ nhớ", "Địa chỉ bắt đầu của đoạn dữ liệu chứa các biến của chương trình hiện hành", "Địa chỉ bắt đầu của đoạn ngăn xếp trong bộ nhớ", "Địa chỉ dữ liệu dạng chuỗi phục vụ cho chương trình hiện hành"],
        answer: "Địa chỉ bắt đầu của đoạn dữ liệu chứa các biến của chương trình hiện hành"
    },
    {
        question: "Thanh ghi SS cho biết thông tin gì?",
        options: ["Địa chỉ bắt đầu của đoạn chương trình hiện hành trong bộ nhớ", "Địa chỉ bắt đầu của đoạn dữ liệu chứa các biến của chương trình hiện hành", "Địa chỉ bắt đầu của đoạn ngăn xếp trong bộ nhớ", "Địa chỉ đoạn dữ liệu mở rộng phục vụ cho chương trình hiện hành"],
        answer: "Địa chỉ bắt đầu của đoạn ngăn xếp trong bộ nhớ"
    },
    {
        question: "Cặp thanh ghi CS:IP cho biết thông tin gì?",
        options: ["Địa chỉ bắt đầu của đoạn dữ liệu dành cho chương trình hiện hành trong bộ nhớ", "Địa chỉ của lệnh vừa được thực hiện", "Địa chỉ của lệnh kế tiếp sẽ được thực hiện", "Địa chỉ bắt đầu của đoạn ngăn xếp trong bộ nhớ"],
        answer: "Địa chỉ của lệnh kế tiếp sẽ được thực hiện"
    },
    {
        question: "Nếu giá trị thanh ghi CS=2D45H và IP=0108H thì lệnh kế tiếp được đặt ở địa chỉ nào trong bộ nhớ?",
        options: ["2D358H", "2D558H", "3D458H", "3D358H"],
        answer: "2D558H"
    },
    {
        question: "Nếu giá trị thanh ghi CS=3A45H và IP=0206H thì lệnh kế tiếp được đặt ở địa chỉ nào trong bộ nhớ?",
        options: ["2A356H", "3A656H", "3B456H", "3B356H"],
        answer: "3A656H"
    },
    {
        question: "Nếu giá trị thanh ghi các CS=3A45H, IP=0206H và bộ vi xử lý thực hiện một lệnh dài 2 byte thì giá trị của thanh ghi IP sẽ bằng bao nhiêu?",
        options: ["3A47H", "3A43H", "0208H", "0204H"],
        answer: "0208H"
    },
    {
        question: "Nếu giá trị thanh ghi các CS=3A45H, IP=0206H và bộ vi xử lý thực hiện một lệnh dài 1 byte thì giá trị của thanh ghi CS sẽ bằng bao nhiêu?",
        options: ["3A46H", "3A45H", "0207H", "0205H"],
        answer: "3A45H"
    },
    {
        question: "Thanh ghi nào được dùng để lưu trữ địa chỉ cổng vào ra khi bộ vi xử lý thao tác với các thiết bị ngoại vi?",
        options: ["AX", "BX", "CX", "DX"],
        answer: "DX"
    },
    {
        question: "Thanh ghi nào được dùng để khai báo số lần thực hiện các vòng lặp của ngôn ngữ Assembly?",
        options: ["AX", "BX", "CX", "DX"],
        answer: "CX"
    },
    {
        question: "Trong hệ nhị phân số 11101.01(2) tương ứng với giá trị thập phân nào trong các giá trị sau đây:",
        options: ["27.75", "29.75", "29.25", "27.25"],
        answer: "29.25"
    },
    {
        question: "Trong hệ nhị phân số 10111.1(2) tương ứng với giá trị thập phân nào trong các giá trị sau đây:",
        options: ["23.5", "23.25", "25.5", "25.25"],
        answer: "23.5"
    },
    {
        question: "Số 267(10) tương ứng với giá trị nhị phân nào trong các giá trị sau đây:",
        options: ["101001011(2)", "100101011(2)", "100101011(2)", "100001011(2)"],
        answer: "100001011(2)"
    },
    {
        question: "Tín hiệu ALE trong Bus IBM PC có chức năng gì?",
        options: ["Chốt dữ liệu", "Chốt địa chỉ", "Chốt tín hiệu điều khiển", "Chốt tín hiệu yêu cầu ngắt"],
        answer: "Chốt địa chỉ"
    },
    {
        question: "Tín hiệu AEN trong Bus IBM PC thuộc vào Bus nào?",
        options: ["Bus địa chỉ", "Bus dữ liệu", "Bus điều khiển", "Bus bộ vi xử lý"],
        answer: "Bus điều khiển"
    },
    {
        question: "Các đường IRQ trong các Bus máy tính IBM PC có chức năng gì?",
        options: ["Các yêu cầu sử dụng Bus", "Các yêu cầu truy nhập bộ nhớ", "Các yêu cầu DMA", "Các yêu cầu ngắt"],
        answer: "Các yêu cầu ngắt"
    },
    {
        question: "Bus EISA có tần số là 8MHz, độ rộng Bus bằng 32 bit, thời gian truyền một khối 32 bit cần 2 chu kỳ. Khi đó dải thông của Bus bằng:",
        options: ["4 MB/s", "8 MB/s", "32 MB/s", "16 MB/s"],
        answer: "16 MB/s"
    },
    {
        question: "Máy tính điện tử là gì?",
        options: ["Thiết bị lưu trữ thông tin", "Thiết bị số hóa và biến đổi thông tin", "Thiết bị lưu trữ và xử lý thông tin", "Thiết bị tạo và biến đổi thông tin"],
        answer: "Thiết bị lưu trữ và xử lý thông tin"
    },
    {
        question: "Máy tính đầu tiên ENIAC sử dụng linh kiện nào trong số các linh kiện sau?",
        options: ["Transistor lưỡng cực", "Transistor trường", "Đèn điện tử", "IC bán dẫn"],
        answer: "Đèn điện tử"
    },
    {
        question: "Trong các phát biểu sau, phát biểu nào đúng?",
        options: ["Phần cứng của máy tính bao gồm các đối tượng vật lý như: bản mạch chính, bộ nhớ RAM, ROM, đĩa cứng, màn hình", "Phần cứng của máy tính bao gồm các đối tượng như: bản mạch chính, bộ nhớ RAM, bộ nhớ ROM, đĩa cứng, màn hình và chương trình được cài đặt trong ROM", "Phần cứng của máy tính là chương trình được cài đặt trong bộ nhớ ROM", "Phần cứng của máy tính chính là bộ xử lý trung tâm"],
        answer: "Phần cứng của máy tính bao gồm các đối tượng như: bản mạch chính, bộ nhớ RAM, bộ nhớ ROM, đĩa cứng, màn hình và chương trình được cài đặt trong ROM"
    },
    {
        question: "Các thành phần cơ bản của một máy tính gồm:",
        options: ["Bộ nhớ trong, CPU và khối phối ghép vào ra", "Bộ nhớ trong, CPU và thiết bị ngoại vi", "Bộ nhớ trong, CPU, khối phối ghép vào ra và thiết bị ngoại vi", "Bộ nhớ trong, CPU, bộ nhớ ngoài, bộ phối ghép vào ra và thiết bị ngoại vi"],
        answer: "Bộ nhớ trong, CPU, khối phối ghép vào ra và thiết bị ngoại vi"
    },
    {
        question: "Phần dẻo (Firmware) trong máy tính là gì?",
        options: ["Phần mềm được đặt vào bên trong các mạch điện tử trong quá trình sản xuất", "Hệ điều hành", "Các Driver cho các thiết bị phần cứng và các mạch hỗ trợ phối ghép vào ra cho máy tính", "Phần mềm hệ thống"],
        answer: "Phần mềm được đặt vào bên trong các mạch điện tử trong quá trình sản xuất"
    },
    {
        question: "Một ví dụ về phần dẻo (Firmware) trong máy tính là:",
        options: ["Hệ điều hành MS DOS", "Chương trình điều khiển trong ROM BIOS", "Chương trình Driver cho Card màn hình của máy tính", "Phần mềm ứng dụng của người dùng"],
        answer: "Chương trình điều khiển trong ROM BIOS"
    },
    {
        question: "Việc trao đổi dữ liệu giữa thiết bị ngoại vi và máy tính được thực hiện qua:",
        options: ["Một thanh ghi điều khiển", "Một cổng giao tiếp", "Thanh ghi AX", "Thanh ghi cờ"],
        answer: "Một cổng giao tiếp"
    },
    {
        question: "BIOS là một nhóm lệnh được lưu trữ trên một chip firmware nằm ở trên bo mạch chủ (mainboard) của máy vi tính, đây là định nghĩa về:",
        options: ["Các bộ điều phối thiết bị giúp cho việc ghép nối và ra được thực hiện một cách linh hoạt.", "Cơ cấu trao đổi dữ liệu giữa các thiết bị phần cứng trong máy tính", "Là một tập hợp dữ liệu hoặc các câu lệnh hướng dẫn máy tính cho phép người dùng tương tác với máy tính,", "Bộ vi xử lý và các vi mạch hỗ trợ cho nó"],
        answer: "Các bộ điều phối thiết bị giúp cho việc ghép nối và ra được thực hiện một cách linh hoạt."
    },
    {
        question: "Trong các bộ phận sau, bộ phận nào không thuộc bộ xử lý trung tâm:",
        options: ["Đơn vị phối ghép vào ra", "Khối số học và logic", "Tập các thanh ghi đa năng", "Khối điều khiển"],
        answer: "Đơn vị phối ghép vào ra"
    },
    {
        question: "Trong các bộ phận sau, bộ phận nào không thuộc bộ xử lý trung tâm:",
        options: ["Bộ nhớ trong", "Khối số học và logic", "Tập các thanh ghi đa năng", "Khối điều khiển để thi hành lệnh một cách tuần tự và tác động lên các mạch chức năng nhằm thi hành lệnh."],
        answer: "Bộ nhớ trong"
    },
    {
        question: "Chữ số M trong hệ đếm La mã tương ứng với giá trị thập phân nào trong các giá trị sau đây:",
        options: ["50", "100", "500", "1000"],
        answer: "1000"
    },
    {
        question: "Trong hệ La mã số CD nhận giá trị thập phân nào trong các giá trị sau đây:",
        options: ["600", "400", "200", "500"],
        answer: "400"
    },
    {
        question: "Bộ mã ASSCII cơ sở gồm bao nhiêu kí tự?",
        options: ["128", "256", "512", "1024"],
        answer: "128"
    },
    {
        question: "Bộ mã ASSCII cơ sở gồm các kí tự được mã hóa bằng bao nhiêu bit?",
        options: ["6 bit", "7 bit", "8 bit", "9 bit"],
        answer: "7 bit"
    },
    {
        question: "Các kí tự được bổ sung trong bộ mã ASSCII mở rộng là các kí tự gì?",
        options: ["Kí tự điều khiển", "Kí tự đồ họa", "Kí tự chữ cái", "Kí tự chữ số"],
        answer: "Kí tự đồ họa"
    },
    {
        question: "Mã NBCD biểu diễn mỗi chữ số thập phân bằng bao nhiêu bit?",
        options: ["3 bit", "4 bit", "6 bit", "8 bit"],
        answer: "4 bit"
    },
    {
        question: "Mã EBCDIC biểu diễn mỗi kí tự bằng bao nhiêu bit?",
        options: ["4 bit", "5 bit", "6 bit", "8 bit"],
        answer: "8 bit"
    },
    {
        question: "Mã NBCD là gì?",
        options: ["Mã sử dụng các bit nhị phân để biểu diễn các chữ số hệ thập phân", "Mã sử dụng các bit nhị phân để biểu diễn các chữ số hexa", "Mã sử dụng các bit nhị phân để biểu diễn các chữ số hệ bát phân", "Mã sử dụng các bit nhị phân để biểu diễn các kí tự ASSCII"],
        answer: "Mã sử dụng các bit nhị phân để biểu diễn các chữ số hệ thập phân"
    },
    {
        question: "Mã ASSCII của chữ số 0 bằng bao nhiêu?",
        options: ["25H", "30H", "36H", "40H"],
        answer: "30H"
    },
    {
        question: "Mã ASSCII của chữ số 9 bằng bao nhiêu?",
        options: ["25H", "36H", "39H", "40H"],
        answer: "39H"
    },
    {
        question: "Hãy chỉ ra khẳng định sai trong các khẳng định sau:",
        options: ["Hệ đếm là tập hợp các ký hiệu và qui tắc sử dụng tập ký hiệu đó để biểu diễn và xác định giá trị các số", "Tổng số ký số của mỗi hệ đếm được gọi là cơ số", "Mỗi hệ đếm được xây dựng trên một tập ký số vô hạn", "Hệ đếm La mã là hệ đếm không có trọng số"],
        answer: "Mỗi hệ đếm được xây dựng trên một tập ký số vô hạn"
    },
    {
        question: "Trong hệ đếm nhị phân, giá trị của mỗi con số phụ thuộc vào:",
        options: ["Mối quan hệ với các chữ số trước và sau nó", "Bản thân chữ số đó", "vị trí của nó", "Bản thân chữ số đó và vị trí của nó"],
        answer: "Bản thân chữ số đó và vị trí của nó"
    },
    {
        question: "Trong số dấu chấm động biểu diễn dạng 32 bit trong máy tính, thành phần định trị có độ dài bao nhiêu bit?",
        options: ["16 bit", "18 bit", "20 bit", "24 bit"],
        answer: "24 bit"
    },
    {
        question: "Trong số dấu chấm động biểu diễn dạng 32 bit trong máy tính, thành phần định trị có độ dài bao nhiêu byte?",
        options: ["1 byte", "2 byte", "3 byte", "4 byte"],
        answer: "3 byte"
    },
    {
        question: "Trong số dấu chấm động biểu diễn dạng 32 bit trong máy tính, thành phần số mũ có độ dài bao nhiêu bit?",
        options: ["6 bit", "7 bit", "8 bit", "9 bit"],
        answer: "8 bit"
    },
    {
        question: "Chữ số L trong hệ đếm La mã tương ứng với giá trị nào trong các giá trị sau đây:",
        options: ["50", "100", "500", "1000"],
        answer: "50"
    },
    {
        question: "Chữ số C trong hệ đếm La mã tương ứng với giá trị thập phân nào trong các giá trị sau đây:",
        options: ["20", "100", "200", "500"],
        answer: "100"
    },
    {
        question: "Chữ số D trong hệ đếm La mã tương ứng với giá trị thập phân nào trong các giá trị sau đây:",
        options: ["50", "100", "500", "1000"],
        answer: "500"
    },
    {
        question: "Trong hệ La mã số CD nhận giá trị thập phân nào trong các giá trị sau đây:",
        options: ["600", "400", "200", "500"],
        answer: "400"
    },
    {
        question: "Trong hệ La mã số DC nhận giá trị thập phân nào trong các giá trị sau đây:",
        options: ["600", "400", "500", "200"],
        answer: "600"
    },
    {
        question: "Trong hệ La mã số LD nhận giá trị thập phân nào trong các giá trị sau đây:",
        options: ["350", "450", "550", "650"],
        answer: "450"
    },
    {
        question: "Trong hệ La mã số MD nhận giá trị thập phân nào trong các giá trị sau đây:",
        options: ["1400", "1500", "1600", "1700"],
        answer: "1500"
    },
    {
        question: "Trong hệ La mã số CM nhận giá trị thập phân nào trong các giá trị sau đây:",
        options: ["1600", "1500", "1100", "900"],
        answer: "900"
    },
    {
        question: "Trong hệ La mã số MCL nhận giá trị thập phân nào trong các giá trị sau đây:",
        options: ["1150", "1050", "950", "650"],
        answer: "1150"
    },
    {
        question: "Trong hệ La mã số MCC nhận giá trị thập phân nào trong các giá trị sau đây:",
        options: ["600", "700", "1100", "1200"],
        answer: "1200"
    },
    {
        question: "Trong hệ La mã số MLD nhận giá trị thập phân nào trong các giá trị sau đây:",
        options: ["1150", "1050", "1450", "1650"],
        answer: "1450"
    },
    {
        question: "Trong hệ La mã số DLL nhận giá trị thập phân nào trong các giá trị sau đây:",
        options: ["400", "600", "800", "1200"],
        answer: "600"
    },
    {
        question: "Trong hệ La mã số MCD nhận giá trị thập phân nào trong các giá trị sau đây:",
        options: ["1400", "1450", "1600", "1650"],
        answer: "1400"
    },
    {
        question: "Trong hệ La mã số MMCMLXXVI nhận giá trị thập phân nào trong các giá trị sau đây:",
        options: ["1846", "2756", "2866", "2976"],
        answer: "2976"
    },
    {
        question: "Trong hệ nhị phân số 11101.11(2) tương ứng với giá trị thập phân nào trong các giá trị sau đây:",
        options: ["26,75", "29,75", "29,65", "26,65"],
        answer: "29,75"
    },
    {
        question: "Trong hệ nhị phân số 10101.11(2) tương ứng với giá trị thập phân nào trong các giá trị sau đây:",
        options: ["21.75", "23.75", "21.65", "23.65"],
        answer: "21.75"
    },
    {
        question: "Trong hệ nhị phân số 10101.01(2) tương ứng với giá trị thập phân nào trong các giá trị sau đây:",
        options: ["23.75", "21.75", "21.25", "23.25"],
        answer: "21.25"
    },
    {
        question: "Tốc độ đồng hồ hệ thống được đo bằng đơn vị gì?",
        options: ["Bit/s", "Baud", "Byte", "Hz"],
        answer: "Hz"
    },
    {
        question: "Trong các phát biểu sau, phát biểu nào không thuộc nội dung của nguyên lý Von Newmann?",
        options: ["Máy tính có thể hoạt động theo một chương trình đã được lưu trữ", "Máy tính sử dụng một bộ đếm chương trình để chỉ ra vị trí câu lệnh kế tiếp", "Bộ nhớ của máy tính được địa chỉ hóa", "Mỗi câu lệnh phải có một vùng nhớ chứa địa chỉ lệnh tiếp theo"],
        answer: "Mỗi câu lệnh phải có một vùng nhớ chứa địa chỉ lệnh tiếp theo"
    },
    {
        question: "Bus hệ thống của máy tính bao gồm:",
        options: ["Bus dữ liệu", "Bus dữ liệu và Bus địa chỉ", "Bus dữ liệu và Bus điều khiển", "Bus dữ liệu, Bus địa chỉ và Bus điều khiển"],
        answer: "Bus dữ liệu, Bus địa chỉ và Bus điều khiển"
    },
    {
        question: "Chức năng của hệ thống Bus trong máy tính là gì?",
        options: ["Mở rộng chức năng giao tiếp của máy tính", "Liên kết các thành phần trong máy tính", "Điều khiển các thiết bị ngoại vi", "Biến đổi dạng tín hiệu trong máy tính"],
        answer: "Liên kết các thành phần trong máy tính"
    },
    {
        question: "Bus nào trong máy tính có nhiệm vụ là đường truyền dẫn giữa CPU và các chip hỗ trợ trung gian?",
        options: ["Bus trong bộ vi xử l", "Bus bộ vi xử lý", "Bus ngoại vi", "Bus hệ thống"],
        answer: "Bus bộ vi xử lý"
    },
    {
        question: "Bus nào trong máy tính có nhiệm vụ là đường truyền dẫn giữa các khối của bộ vi xử lý?",
        options: ["Bus VGA", "Bus bộ vi xử lý", "Bus ngoại vi", "Bus hệ thống"],
        answer: "Bus trong bộ vi xử lý"
    },
    {
        question: "Bus nào trong máy tính có nhiệm vụ kết nối bộ vi xử lý với bộ nhớ chính và bộ nhớ Cache?",
        options: ["Bus trong bộ vi xử lý", "Bus bộ vi xử lý", "Bus ngoại vi", "Bus hệ thống"],
        answer: "Bus hệ thống"
    },
    {
        question: "Chức năng của Bus hệ thống trong máy tính là gì?",
        options: ["Là đường truyền dẫn giữa các khối của bộ vi xử lý", "Kết nối bộ vi xử lý với bộ nhớ chính, bộ nhớ Cache và các bộ điều khiển ghép nối vào ra", "Kết nối hệ thống vào ra với bộ vi xử lý", "Đường truyền dẫn giữa CPU và các chip hỗ trợ trung gian"],
        answer: "Kết nối bộ vi xử lý với bộ nhớ chính, bộ nhớ Cache và các bộ điều khiển ghép nối vào ra"
    },
    {
        question: "Đặc điểm quan trọng của Bus đồng bộ là gì?",
        options: ["Dữ liệu được truyền đồng thời", "Dữ liệu được truyền không đồng thời", "Có tín hiệu đồng hồ chung điều khiển hoạt động", "Không có tín hiệu đồng hồ chung điều khiển hoạt động"],
        answer: "Có tín hiệu đồng hồ chung điều khiển hoạt động"
    },
    {
        question: "Một trong các đặc điểm của Bus đồng bộ là:",
        options: ["Chu kỳ Bus thay đổi với từng cặp thiết bị trao đổi dữ liệu", "Dữ liệu được truyền liên tục trong mọi chu kỳ Bus", "Mọi thao tác được thực hiện trong những khoảng thời gian là bội số của chu kỳ Bus", "Tần số tín hiệu đồng hồ chung thay đổi tùy theo điều kiện của hệ thống"],
        answer: "Mọi thao tác được thực hiện trong những khoảng thời gian là bội số của chu kỳ Bus"
    },
    {
        question: "Đặc điểm quan trọng của Bus không đồng bộ là gì?",
        options: ["Dữ liệu được truyền không đồng thời", "Có tín hiệu đồng hồ chung điều khiển hoạt động", "Không có tín hiệu đồng hồ chung điều khiển hoạt động", "Dữ liệu được truyền đồng thời"],
        answer: "Không có tín hiệu đồng hồ chung điều khiển hoạt động"
    },
    {
        question: "Trong các đặc điểm sau, đặc điểm nào không phải của Bus đồng bộ?",
        options: ["Chu kỳ Bus không thay đổi với mọi cặp thiết bị trao đổi dữ liệu", "Hệ thống được định thời một cách gián đoạn", "Mọi thao tác được thực hiện trong những khoảng thời gian là bội số của chu kỳ Bus", "Việc trao đổi dữ liệu giữa các thiết bị cần có tín hiệu handshake"],
        answer: "Việc trao đổi dữ liệu giữa các thiết bị cần có tín hiệu handshake"
    },
    {
        question: "Tại sao trong thực tế Bus đồng bộ được sử dụng rộng rãi hơn Bus không đồng bộ?",
        options: ["Tận dụng tốt thời gian xử lý của CPU", "Việc điều khiển hoạt động của máy tính dễ dàng hơn", "Dễ tận dụng các tiến bộ của công nghệ", "Cho phép thay đổi chu kỳ Bus một cách mềm dẻo"],
        answer: "Việc điều khiển hoạt động của máy tính dễ dàng hơn"
    },
    {
        question: "Trong trường hợp nào nên sử dụng Bus không đồng bộ?",
        options: ["Khi hệ thống có nhiều thiết bị với tốc độ chênh lệch nhau rất lớn", "Khi hệ thống có nhiều thiết bị với tốc độ chênh lệch nhau rất nhỏ", "Mọi thao tác hầu hết có thời gian xử lý bằng bội số của chu kỳ Bus", "Yêu cầu dễ dàng trong việc điều khiển hoạt động của máy tính"],
        answer: "Khi hệ thống có nhiều thiết bị với tốc độ chênh lệch nhau rất lớn"
    },
    {
        question: "Trong trường hợp nào nên sử dụng Bus đồng bộ?",
        options: ["Khi hệ thống có nhiều thiết bị với tốc độ chênh lệch nhau rất lớn", "Yêu cầu chu kỳ Bus có thể thay đổi với từng cặp thiết bị trao đổi dữ liệu", "Mọi thao tác hầu hết có thời gian xử lý bằng bội số của chu kỳ Bus", "Yêu cầu tận dụng tốt thời gian xử lý của CPU"],
        answer: "Mọi thao tác hầu hết có thời gian xử lý bằng bội số của chu kỳ Bus"
    },
    {
        question: "Bus nào trong máy tính có nhiệm vụ kết nối các thiết bị vào ra với bộ vi xử lý?",
        options: ["Bus trong bộ vi xử lý", "Bus bộ vi xử lý", "Bus ngoại vi", "Bus hệ thống"],
        answer: "Bus ngoại vi"
    },
    {
        question: "Chức năng của Bus ngoại vi trong máy tính là gì?",
        options: ["Là đường truyền dẫn giữa các khối của bộ vi xử lý", "Kết nối bộ vi xử lý với bộ nhớ chính và bộ nhớ Cache", "Kết nối hệ thống vào ra với bộ vi xử lý", "Đường truyền dẫn giữa CPU và các chip hỗ trợ trung gian"],
        answer: "Kết nối hệ thống vào ra với bộ vi xử lý"
    },
    {
        question: "Chức năng của Bus bộ vi xử lý trong máy tính là gì?",
        options: ["Là đường truyền dẫn giữa các khối của bộ vi xử lý", "Kết nối bộ vi xử lý với bộ nhớ chính và bộ nhớ Cache", "Kết nối hệ thống vào ra với bộ vi xử lý", "Đường truyền dẫn giữa CPU và các vi mạch hỗ trợ"],
        answer: "Đường truyền dẫn giữa CPU và các vi mạch hỗ trợ"
    },
    {
        question: "Chức năng của Bus trong bộ vi xử lý của máy tính là gì?",
        options: ["Là đường truyền dẫn giữa các khối của bộ vi xử lý", "Kết nối bộ vi xử lý với bộ nhớ chính và bộ nhớ Cache", "Kết nối hệ thống vào ra với bộ vi xử lý", "Đường truyền dẫn giữa CPU và các chip hỗ trợ trung gian"],
        answer: "Là đường truyền dẫn giữa các khối của bộ vi xử lý"
    },
    {
        question: "So với Bus không đồng bộ, Bus đồng bộ có đặc điểm là:",
        options: ["Việc điều khiển hoạt động của máy tính khó khăn hơn", "Việc điều khiển hoạt động của máy tính dễ dàng hơn", "Thiết kế hệ thống Bus khó khăn hơn", "Dễ tận dụng tiến bộ của công nghệ chế tạo trong chế tạo Bus"],
        answer: "Việc điều khiển hoạt động của máy tính dễ dàng hơn"
    },
    {
        question: "So với Bus đồng bộ, Bus không đồng bộ có đặc điểm là:",
        options: ["Việc điều khiển hoạt động của máy tính khó khăn hơn", "Việc điều khiển hoạt động của máy tính dễ dàng hơn", "Thiết kế hệ thống Bus dễ dàng hơn", "Khó tận dụng tiến bộ của công nghệ chế tạo trong chế tạo hệ thống Bus"],
        answer: "Việc điều khiển hoạt động của máy tính khó khăn hơn"
    },
    {
        question: "Trong trường hợp sử dụng Bus đồng bộ, nếu một thao tác có thời gian hoàn thành bằng 3,2 chu kỳ thì trong thực tế nó sẽ được thực hiện trong mấy chu kỳ?",
        options: ["3", "3,2", "4", "4,2"],
        answer: "4"
    },
    {
        question: "Trong trường hợp sử dụng Bus không đồng bộ, nếu một thao tác có thời gian hoàn thành bằng 3,2 chu kỳ thì trong thực tế nó sẽ được thực hiện trong mấy chu kỳ?",
        options: ["3", "3,2", "4", "4,2"],
        answer: "3,2"
    },
    {
        question: "Độ rộng của Bus được xác định bởi:",
        options: ["Số đường luồng dữ liệu của Bus", "Số thành phần được kết nối tới Bus", "Số Byte dữ liệu được truyền trong một đơn vị thời gian", "Số Bit dữ liệu được truyền trong một đơn vị thời gian"],
        answer: "Số đường luồng dữ liệu của Bus"
    },
    {
        question: "Tần số Bus đặc trưng cho:",
        options: ["Tốc độ điều khiển các thành phần của máy tính", "Tốc độ truyền dữ liệu trên Bus", "Tốc độ phân phối tài nguyên trong máy tính", "Tốc độ cấp phát bộ nhớ cho các thành phần trong máy tính"],
        answer: "Tốc độ truyền dữ liệu trên Bus"
    },
    {
        question: "Dải thông Bus được xác định bởi:",
        options: ["Số lượng Byte chuyển qua Bus trong một chu kỳ xung nhịp", "Số lượng Bit chuyển qua Bus trong một chu kỳ xung nhịp", "Số lượng Byte chuyển qua Bus trong một đơn vị thời gian", "Số lượng Bit chuyển qua Bus trong một đơn vị thời gian"],
        answer: "Số lượng Byte chuyển qua Bus trong một đơn vị thời gian"
    },
    {
        question: "Tham số nào đặc trưng cho tốc độ truyền dữ liệu trên Bus?",
        options: ["Dải thông của Bus", "Tần số của Bus", "Độ rộng của Bus", "Cả ba tham số trên"],
        answer: "Dải thông của Bus"
    },
    {
        question: "Tham số nào cho biết số lượng Byte chuyển qua Bus trong một đơn vị thời gian?",
        options: ["Dải thông của Bus", "Tần số của Bus", "Độ rộng của Bus", "Cả ba tham số trên"],
        answer: "Dải thông của Bus"
    },
    {
        question: "Tham số nào của Bus cho biết đường luồng dữ liệu truyền qua nó?",
        options: ["Dải thông của Bus", "Tần số của Bus", "Độ rộng của Bus", "Cả ba tham số trên"],
        answer: "Độ rộng của Bus"
    },
    {
        question: "Trong các Bus sau, Bus nào là Bus một chiều?",
        options: ["Bus dữ liệu bên trong bộ vi xử lý", "Bus dữ liệu giữa bộ vi xử lý và bộ nhớ", "Bus địa chỉ", "Bus điều khiển"],
        answer: "Bus địa chỉ"
    },
    {
        question: "Bus dữ liệu trong máy tính là:",
        options: ["Bus một chiều", "Bus hai chiều với từng đường dây", "Bus một chiều với từng đường dây nhưng là hai chiều với toàn bộ Bus", "Bus có độ rộng thay đổi"],
        answer: "Bus hai chiều với từng đường dây"
    },
    {
        question: "Bus địa chỉ trong máy tính là:",
        options: ["Bus một chiều", "Bus hai chiều với từng đường dây", "Bus một chiều với từng đường dây nhưng là hai chiều với toàn bộ Bus", "Bus có độ rộng thay đổi"],
        answer: "Bus một chiều"
    },
    {
        question: "Bus điều khiển trong máy tính là:",
        options: ["Bus một chiều", "Bus hai chiều với từng đường dây", "Bus một chiều với từng đường dây nhưng là hai chiều với toàn bộ Bus", "Bus có độ rộng thay đổi"],
        answer: "Bus một chiều với từng đường dây nhưng là hai chiều với toàn bộ Bus"
    },
    {
        question: "Trong các Bus sau, Bus nào là Bus hai chiều đối với mỗi đường tín hiệu?",
        options: ["Bus dữ liệu", "Bus địa chỉ cho bộ nhớ", "Bus địa chỉ cho ngoại vi", "Bus điều khiển"],
        answer: "Bus dữ liệu"
    },
    {
        question: "Bus ISA có tần số là 8MHz, độ rộng Bus bằng 16 bit, thời gian truyền một khối 16 bit cần 2 chu kỳ. Khi đó dải thông của Bus bằng:",
        options: ["4 MB/s", "8 MB/s", "16 MB/s", "32 MB/s"],
        answer: "4 MB/s"
    },
    {
        question: "Bus PCI có tần số là 33MHz, độ rộng Bus bằng 32 bit, thời gian truyền một khối 32 bit cần 2 chu kỳ. Khi đó dải thông của Bus bằng:",
        options: ["8 MB/s", "33 MB/s", "16 MB/s", "66 MB/s"],
        answer: "66 MB/s"
    },
    {
        question: "Trọng tài Bus có chức năng gì?",
        options: ["Giải quyết vấn đề tranh chấp làm chủ Bus", "Giải quyết vấn đề cấp phát bộ vi xử lý cho các thao tác", "Giải quyết điều khiển bộ vi xử lý thực hiện các thao tác trao đổi với các thiết bị ngoại vi nối tới Bus", "Giải quyết vấn đề cấp phát bộ nhớ cho các thao tác của các thiết bị ngoại vi nối tới Bus"],
        answer: "Giải quyết vấn đề tranh chấp làm chủ Bus"
    },
    {
        question: "Đặc điểm của trọng tài Bus tập trung:",
        options: ["Việc phân chia quyền sử dụng Bus do một đơn vị trọng tài Bus duy nhất đảm nhiệm", "Việc phân chia quyền sử dụng Bus do các thiết bị ngoại vi tự thực hiện", "Đơn vị trọng tài Bus đồng thời làm chủ Bus", "Đơn vị trọng tài Bus nằm ở vị trí trung tâm của máy tính"],
        answer: "Việc phân chia quyền sử dụng Bus do một đơn vị trọng tài Bus duy nhất đảm nhiệm"
    },
    {
        question: "Đặc điểm của trọng tài Bus không tập trung với multibus:",
        options: ["Việc phân chia quyền sử dụng Bus do các thiết bị ngoại vi tự thực hiện", "Việc phân chia quyền sử dụng Bus không cần một đơn vị trọng tài Bus riêng biệt", "Đơn vị trọng tài Bus đồng thời làm chủ Bus", "Đơn vị trọng tài Bus không nằm ở vị trí trung tâm của máy tính"],
        answer: "Việc phân chia quyền sử dụng Bus không cần một đơn vị trọng tài Bus riêng biệt"
    },
    {
        question: "Đặc điểm của trọng tài Bus tập trung một mức:",
        options: ["Các thiết bị nối với đơn vị trọng tài Bus bằng một dây duy nhất", "Các thiết bị ngoại vi dùng chung một đường dây yêu cầu Bus", "Các thiết bị ngoại vi dùng chung một đường dây cho phép sử dụng Bus", "Mỗi thiết bị ngoại vi có một đường dây yêu cầu Bus riêng"],
        answer: "Các thiết bị ngoại vi dùng chung một đường dây yêu cầu Bus"
    },
    {
        question: "Đặc điểm của trọng tài Bus tập trung nhiều mức:",
        options: ["Các thiết bị nối với đơn vị trọng tài Bus bằng một dây duy nhất", "Các thiết bị ngoại vi được nối tới các đường dây yêu cầu Bus khác nhau", "Các thiết bị ngoại vi được nối tới tất cả các đường dây yêu cầu Bus", "Mỗi thiết bị ngoại vi có một đường dây yêu cầu Bus riêng"],
        answer: "Các thiết bị ngoại vi được nối tới các đường dây yêu cầu Bus khác nhau"
    },
    {
        question: "Trong kiểu trọng tài Bus nào thì việc phân chia quyền sử dụng Bus do một đơn vị trọng tài Bus duy nhất đảm nhiệm?",
        options: ["Trọng tài Bus không tập trung", "Trọng tài Bus tập trung", "Cả hai kiểu trên", "Không có kiểu nào trong hai kiểu trên"],
        answer: "Trọng tài Bus tập trung"
    },
    {
        question: "Trong kiểu trọng tài Bus nào thì việc phân chia quyền sử dụng Bus không cần một đơn vị trọng tài Bus riêng biệt?",
        options: ["Trọng tài Bus không tập trung", "Trọng tài Bus tập trung", "Trọng tài Bus tập trung một mức", "Trọng tài Bus tập trung nhiều mức"],
        answer: "Trọng tài Bus không tập trung"
    },
    {
        question: "Trong kiểu trọng tài Bus nào thì các thiết bị ngoại vi dùng chung một đường dây yêu cầu Bus?",
        options: ["Trọng tài Bus không tập trung", "Trọng tài Bus tập trung", "Trọng tài Bus tập trung một mức", "Trọng tài Bus tập trung nhiều mức"],
        answer: "Trọng tài Bus tập trung một mức"
    },
    {
        question: "Trong kiểu trọng tài Bus nào thì các thiết bị ngoại vi được nối với các đường dây yêu cầu Bus khác nhau?",
        options: ["Trọng tài Bus không tập trung", "Trọng tài Bus tập trung", "Trọng tài Bus tập trung một mức", "Trọng tài Bus tập trung nhiều mức"],
        answer: "Trọng tài Bus tập trung nhiều mức"
    },
    {
        question: "Thành phần nào có thể đóng vai trò chủ Bus (Bus Master)?",
        options: ["Chỉ CPU có thể đóng vai trò chủ Bus", "Chỉ các chip vào ra IO có thể đóng vai trò chủ Bus", "CPU hoặc các chip vào ra IO đều có thể đóng vai trò chủ Bus", "Chỉ một chip vào ra IO duy nhất được chỉ định đóng vai trò chủ Bus"],
        answer: "CPU hoặc các chip vào ra IO đều có thể đóng vai trò chủ Bus"
    },
    {
        question: "Bus dữ liệu của bộ vi xử lý Intel 8088 có bao nhiêu đường?",
        options: ["8 đường", "16 đường", "20 đường", "24 đường"],
        answer: "8 đường"
    },
    {
        question: "Trong cấu trúc bộ nhớ dạng 2^N x M, phát biểu nào dưới đây đúng?",
        options: ["Bộ nhớ gồm 2^n Byte và M module nhớ", "Bộ nhớ gồm 2^n từ nhớ và M module nhớ", "Bộ nhớ gồm 2 ngăn nhớ, mỗi ngăn nhớ gồm M bit", "Bộ nhớ gồm 2^n từ nhớ và M module nhớ"],
        answer: "Bộ nhớ gồm 2^n từ nhớ và M module nhớ"
    },
    {
        question: "Khái niệm truy xuất ngẫu nhiên đối với bộ nhớ có ý nghĩa như thế nào?",
        options: ["Dữ liệu trong bộ nhớ được đọc hay ghi vào các thời điểm ngẫu nhiên", "Dữ liệu trong bộ nhớ được định địa chỉ một cách ngẫu nhiên", "Dữ liệu trong bộ nhớ không được đọc hay ghi một cách tuần tự", "Dữ liệu trong bộ nhớ có giá trị ngẫu nhiên"],
        answer: "Dữ liệu trong bộ nhớ không được đọc hay ghi một cách tuần tự"
    },
    {
        question: "Trong bộ nhớ ROM, thời gian truy nhập đối với ngăn nhớ có địa chỉ 00000H so với thời gian truy nhập đối với ngăn nhớ có địa chỉ 00FFFH như thế nào?",
        options: ["Lớn hơn", "Nhỏ hơn", "Bằng nhau", "Không so sánh được"],
        answer: "Bằng nhau"
    },
    {
        question: "Trong bộ nhớ RAM, thời gian truy nhập đối với ngăn nhớ có địa chỉ 00000H so với thời gian truy nhập đối với ngăn nhớ có địa chỉ FFFFFH như thế nào?",
        options: ["Lớn hơn", "Nhỏ hơn", "Bằng nhau", "Không so sánh được"],
        answer: "Bằng nhau"
    },
    {
        question: "Các bộ nhớ nào sau đây cho phép truy nhập ngẫu nhiên?",
        options: ["DRAM", "ROM", "Cache", "Cả ba loại trên"],
        answer: "Cả ba loại trên"
    },
    {
        question: "Đặc điểm của bộ nhớ Cache là:",
        options: ["Dung lượng lớn", "Thời gian truy nhập lớn", "Thời gian truy nhập nhỏ", "Chi phí thấp"],
        answer: "Thời gian truy nhập nhỏ"
    },
    {
        question: "Đặc điểm của bộ nhớ Cache là:",
        options: ["Có dung lượng lớn hơn bộ nhớ RAM", "Cho phép truy nhập nhanh hơn so với bộ nhớ DRAM", "Cho phép truy nhập nhanh hơn so với các thanh ghi của CPU", "Là bộ nhớ cố định"],
        answer: "Cho phép truy nhập nhanh hơn so với bộ nhớ DRAM"
    },
    {
        question: "Chức năng của tín hiệu Chip Enable trong IC bộ nhớ là gì?",
        options: ["Cho phép đọc dữ liệu trong IC bộ nhớ", "Cho phép ghi dữ liệu vào IC bộ nhớ", "Cho phép IC bộ nhớ hoạt động", "Cho phép đọc, ghi đồng thời đối với IC bộ nhớ"],
        answer: "Cho phép IC bộ nhớ hoạt động"
    },
    {
        question: "Đặc điểm của bộ nhớ ROM",
        options: ["Cho phép ghi dữ liệu", "Chỉ cho phép đọc dữ liệu", "Bị mất dữ liệu khi không có nguồn cấp", "Cho phép ghi/đọc dữ liệu đồng thời tại một vị trí nhớ"],
        answer: "Chỉ cho phép đọc dữ liệu"
    },
    {
        question: "Đặc điểm của bộ nhớ RAM nói chung",
        options: ["Cho phép ghi dữ liệu", "Chỉ cho phép đọc dữ liệu", "Không bị mất dữ liệu khi không có nguồn cấp", "Cho phép ghi/đọc dữ liệu đồng thời tại một vị trí nhớ"],
        answer: "Cho phép ghi dữ liệu"
    },
    {
        question: "Đặc điểm của bộ nhớ SRAM",
        options: ["Phải được làm tươi theo chu kỳ", "Không phải làm tươi theo chu kỳ", "Thời gian truy nhập lớn", "Chi phí trên một bịt nhớ thấp"],
        answer: "Không phải làm tươi theo chu kỳ"
    },
    {
        question: "Đặc điểm của bộ nhớ DRAM",
        options: ["Thời gian truy nhập nhỏ", "Chi phí trên một bịt nhớ cao", "Không phải làm tươi theo chu kỳ", "Phải được làm tươi theo chu kỳ"],
        answer: "Phải được làm tươi theo chu kỳ"
    },
    {
        question: "Bộ nhớ Cache được cấu trúc từ loại bộ nhớ nào trong số các bộ nhớ sau đây?",
        options: ["SRAM", "DRAM", "ROM", "Flash ROM"],
        answer: "SRAM"
    },
    {
        question: "Chức năng của bộ nhớ Cache trong máy tính là gì?",
        options: ["Giúp mở rộng dung lượng bộ nhớ", "Chứa các toán hạng là hằng số", "Lưu giữ dữ liệu mà bộ vi xử lý thường xuyên sử dụng", "Lưu giữ các tham số hệ thống"],
        answer: "Lưu giữ dữ liệu mà bộ vi xử lý thường xuyên sử dụng"
    },
    {
        question: "Đường dây Read/Write trong IC bộ nhớ có chức năng là gì?",
        options: ["Cho biết bộ nhớ có cho phép đọc và ghi hay không", "Cho biết bộ nhớ có thể đọc và ghi đồng thời hay không", "Cho biết thao tác được thực hiện là đọc hay ghi", "Cho biết bộ nhớ có bị cấm đọc hay cấm ghi không"],
        answer: "Cho biết thao tác được thực hiện là đọc hay ghi"
    },
    {
        question: "Đặc điểm của bộ nhớ ROM là:",
        options: ["Cho phép truy nhập nhanh hơn bộ nhớ RAM", "Nội dung không bị thay đổi khi không cung cấp nguồn điện", "Lưu trữ được nhiều thông tin hơn bộ nhớ RAM", "Được sử dụng làm bộ nhớ Cache"],
        answer: "Nội dung không bị thay đổi khi không cung cấp nguồn điện"
    },
    {
        question: "Mạch chọn địa chỉ hàng và mạch chọn địa chỉ cột tạo thành mạch gì?",
        options: ["Mạch tạo địa chỉ bộ nhớ", "Mạch giải mã địa chỉ", "Mạch đọc/ghi dữ liệu bộ nhớ", "Mạch cho phép chốt địa chỉ bộ nhớ"],
        answer: "Mạch giải mã địa chỉ"
    },
    {
        question: "Cấu tạo của một ô nhớ DRAM như thế nào?",
        options: ["Gồm một tụ điện và một Transistor", "Gồm hai tụ điện và hai Transistor", "Gồm hai tụ điện và hai Transistor", "Gồm hai tụ điện và một Transistor"],
        answer: "Gồm một tụ điện và một Transistor"
    },
    {
        question: "Cấu tạo của một ô nhớ SRAM như thế nào?",
        options: ["Gồm hai tụ điện và ba Transistor", "Gồm ba tụ điện và hai Transistor", "Gồm bốn tụ điện và hai Transistor", "Gồm bốn transistor tạo thành 2 cặp chéo nhau"],
        answer: "Gồm bốn transistor tạo thành 2 cặp chéo nhau"
    },
    {
        question: "Tốc độ truy nhập của bộ nhớ SRAM so với bộ nhớ DRAM như thế nào?",
        options: ["Chậm hơn", "Nhanh hơn", "Bằng nhau", "Không xác định được"],
        answer: "Nhanh hơn"
    },
    {
        question: "Đối với bộ nhớ truy nhập ngẫu nhiên, điều nào sau đây đúng?",
        options: ["Dữ liệu của bộ nhớ được đọc hay ghi tại các thời điểm ngẫu nhiên", "Thời gian truy nhập vào bất kỳ ngăn nhớ nào trong bộ nhớ đều bằng nhau", "Dữ liệu trong bộ nhớ có giá trị ngẫu nhiên", "Dữ liệu trong bộ nhớ không được đọc hay ghi một cách tuần tự"],
        answer: "Thời gian truy nhập vào bất kỳ ngăn nhớ nào trong bộ nhớ đều bằng nhau"
    },
    {
        question: "Đối với bộ nhớ truy nhập ngẫu nhiên, điều nào sau đây không đúng?",
        options: ["Để truy nhập vào bất kỳ ngăn nhớ nào trong bộ nhớ, ta chỉ cần xác định địa chỉ của nó", "Thời gian truy nhập vào bất kỳ ngăn nhớ nào trong bộ nhớ đều bằng nhau", "Địa chỉ các ngăn nhớ bao gồm địa chỉ hàng và địa chỉ cột", "Dữ liệu trong bộ nhớ không được đọc hay ghi một cách tuần tự theo địa chỉ của bộ nhớ"],
        answer: "Dữ liệu trong bộ nhớ không được đọc hay ghi một cách tuần tự theo địa chỉ của bộ nhớ"
    },
    {
        question: "Trong các phát biểu sau, phát biểu nào đúng?",
        options: ["Bộ nhớ ROM không phải là bộ nhớ truy nhập ngẫu nhiên", "Bộ nhớ trong có dung lượng lớn hơn bộ nhớ ngoài", "Bộ nhớ Cache có tốc độ cao hơn bộ nhớ trong", "Bộ nhớ RAM luôn có dung lượng nhỏ hơn bộ nhớ Cache"],
        answer: "Bộ nhớ Cache có tốc độ cao hơn bộ nhớ trong"
    },
    {
        question: "Chương trình BIOS được lưu trữ trong bộ nhớ thuộc loại nào?",
        options: ["RAM", "ROM", "đĩa cứng", "Cache"],
        answer: "ROM"
    },
    {
        question: "Dung lượng của bộ nhớ được xác định bởi:",
        options: ["Số lượng dây dữ liệu trên Bus dữ liệu truy nhập bộ nhớ", "Số lượng bit hoặc từ mà bộ nhớ có thể lưu trữ", "Số lượng Module nhớ có trong bộ nhớ", "Số lượng bit dữ liệu được bộ nhớ trao đổi trong một đơn vị thời gian"],
        answer: "Số lượng bit hoặc từ mà bộ nhớ có thể lưu trữ"
    },
    {
        question: "Thời gian truy nhập bộ nhớ được tính bằng:",
        options: ["Thời gian từ lúc khởi động chương trình tới khi nhận được dữ liệu từ bộ nhớ", "Thời gian từ khi nhận lệnh tới khi nhận được dữ liệu từ bộ nhớ", "Thời gian từ khi có tín hiệu Chip Enable tới khi nhận được dữ liệu", "Thời gian tồn tại của dữ liệu trên Bus hệ thống"],
        answer: "Thời gian từ khi có tín hiệu Chip Enable tới khi nhận được dữ liệu"
    },
    {
        question: "Bus địa chỉ 20 bit cho phép quản lý bộ nhớ với dung lượng tối đa bằng bao nhiêu?",
        options: ["1 MegaByte", "4 MegaByte", "8 MegaByte", "16 MegaByte"],
        answer: "1 MegaByte"
    },
    {
        question: "Bus địa chỉ 32 bit cho phép quản lý bộ nhớ với dung lượng tối đa bằng bao nhiêu?",
        options: ["16 MegaByte", "64 MegaByte", "1 GigaByte", "4 GigaByte"],
        answer: "4 GigaByte"
    },
    {
        question: "Bus địa chỉ 24 bit cho phép quản lý bộ nhớ với dung lượng tối đa bằng bao nhiêu?",
        options: ["8 MegaByte", "16 MegaByte", "32 MegaByte", "64 MegaByte"],
        answer: "16 MegaByte"
    },
    {
        question: "Chương trình BIOS trong các máy tính hiện đại thường được lưu trữ trong bộ nhớ loại nào?",
        options: ["PROM", "EPROM", "EEPROM", "Flash ROM"],
        answer: "Flash ROM"
    },
    {
        question: "Đặc điểm của ROM mặt nạ (Maskable ROM) là gì?",
        options: ["Được nhà sản xuất nạp sẵn dữ liệu, người dùng không thể thay đổi dữ liệu", "Người dùng có thể nạp dữ liệu bằng thiết bị đốt ROM. Dữ liệu đã được nạp thì không thể thay đổi được nữa", "Người dùng có thể nạp hoặc xóa dữ liệu bằng thiết bị sử dụng tia cực tím", "Người dùng có thể nạp hoặc xóa dữ liệu bằng điện"],
        answer: "Được nhà sản xuất nạp sẵn dữ liệu, người dùng không thể thay đổi dữ liệu"
    },
    {
        question: "Đặc điểm của PROM là gì?",
        options: ["Được nhà sản xuất nạp sẵn dữ liệu, người dùng không thể thay đổi dữ liệu", "Người dùng có thể nạp dữ liệu bằng thiết bị đốt ROM. Dữ liệu đã được nạp thì không thể thay đổi được nữa", "Người dùng có thể nạp hoặc xóa dữ liệu bằng thiết bị sử dụng tia cực tím", "Người dùng có thể nạp hoặc xóa dữ liệu bằng điện"],
        answer: "Người dùng có thể nạp dữ liệu bằng thiết bị đốt ROM. Dữ liệu đã được nạp thì không thể thay đổi được nữa"
    },
    {
        question: "Đặc điểm của EPROM là gì?",
        options: ["Được nhà sản xuất nạp sẵn dữ liệu, người dùng không thể thay đổi dữ liệu", "Người dùng có thể nạp dữ liệu bằng thiết bị đốt ROM. Dữ liệu đã được nạp thì không thể thay đổi được nữa", "Người dùng có thể nạp hoặc xóa dữ liệu bằng thiết bị sử dụng tia cực tím", "Người dùng có thể nạp hoặc xóa dữ liệu bằng điện"],
        answer: "Người dùng có thể nạp hoặc xóa dữ liệu bằng thiết bị sử dụng tia cực tím"
    },
    {
        question: "Đặc điểm của EEPROM là gì?",
        options: ["Được nhà sản xuất nạp sẵn dữ liệu, người dùng không thể thay đổi dữ liệu", "Người dùng có thể nạp dữ liệu bằng thiết bị đốt ROM. Dữ liệu đã được nạp thì không thể thay đổi được nữa", "Người dùng có thể nạp hoặc xóa dữ liệu bằng thiết bị sử dụng tia cực tím", "Người dùng có thể nạp hoặc xóa dữ liệu bằng điện"],
        answer: "Người dùng có thể nạp hoặc xóa dữ liệu bằng điện"
    },
    {
        question: "Loại ROM nào mà người dùng có thể nạp dữ liệu bằng thiết bị đốt ROM?",
        options: ["ROM mặt nạ", "PROM", "EPROM", "EEPROM"],
        answer: "PROM"
    },
    {
        question: "Loại ROM nào đã được nhà sản xuất nạp sẵn dữ liệu, người dùng không thể thay đổi dữ liệu?",
        options: ["ROM mặt nạ", "PROM", "EPROM", "EEPROM"],
        answer: "ROM mặt nạ"
    },
    {
        question: "Loại ROM nào mà dùng có thể nạp dữ liệu bằng thiết bị sử dụng tia cực tím?",
        options: ["ROM mặt nạ", "PROM", "EPROM", "EEPROM"],
        answer: "EPROM"
    },
    {
        question: "Loại ROM nào mà dùng có thể nạp dữ liệu bằng điện?",
        options: ["ROM mặt nạ", "PROM", "EPROM", "EEPROM"],
        answer: "EEPROM"
    },
    {
        question: "Trong các máy tính hiện đại, thiết bị nhớ nào trong số các loại bộ nhớ sau thường có dung lượng nhỏ nhất?",
        options: ["ROM", "RAM", "Cache", "đĩa cứng"],
        answer: "Cache"
    },
    {
        question: "Chương trình BIOS lưu trong ROM CMOS được gọi là:",
        options: ["Hệ thống điều hành phần cứng cơ sở", "Hệ thống vào ra cơ sở", "Hệ thống kiểm tra máy tính khi khởi động", "Hệ thống quản lý phối ghép vào ra cơ sở"],
        answer: "Hệ thống vào ra cơ sở"
    },
    {
        question: "Trong các khối sau, khối nào không thuộc hệ thống hỗ trợ vào ra?",
        options: ["Bộ điều khiển ổ đĩa", "Bộ phối ghép màn hình", "Bộ điều khiển bàn phím", "Các thanh ghi đa năng"],
        answer: "Các thanh ghi đa năng"
    },
    {
        question: "Trong các thiết bị sau, thiết bị nào không phải là thiết bị ngoại vi:",
        options: ["Màn hình", "RAM", "Đĩa cứng", "Bàn phím"],
        answer: "RAM"
    },
    {
        question: "Trong các thành phần sau, thành phần nào thuộc hệ thống hỗ trợ phối ghép vào ra?",
        options: ["Cache", "Cáp nguồn ổ cứng", "Giao tiếp cổng USB", "Các thanh ghi đa năng"],
        answer: "Giao tiếp cổng USB"
    },
    {
        question: "Chức năng nào sau đây không phải là chức năng của hệ thống hỗ trợ vào ra?",
        options: ["Phối ghép các thiết bị ngoại vi với các thành phần khác của máy tính", "Đảm bảo việc chuyển dữ liệu giữa máy tính và thiết bị ngoại vi", "Điều khiển cấp phát bộ vi xử lý cho các thao tác trong môi trường đa nhiệm", "Hỗ trợ việc truyền dữ liệu giữa các thiết bị ngoại vi và bộ nhớ"],
        answer: "Điều khiển cấp phát bộ vi xử lý cho các thao tác trong môi trường đa nhiệm"
    },
    {
        question: "Chức năng của hệ thống hỗ trợ vào ra là:",
        options: ["Chuyển đổi dữ liệu từ môi trường bên ngoài thành dạng số và đưa vào máy tính", "Đảm bảo việc trao đổi dữ liệu giữa máy tính và các thiết bị ngoại vi", "Tiếp nhận các ngắt từ các thiết bị vào ra dữ liệu", "Hỗ trợ thiết lập việc truyền dữ liệu giữa các máy tính"],
        answer: "Đảm bảo việc trao đổi dữ liệu giữa máy tính và các thiết bị ngoại vi"
    },
    {
        question: "Đặc điểm của thiết bị lưu trữ ngoài là:",
        options: ["Tốc độ truy cập nhanh", "Dung lượng nhỏ", "Không mất dữ liệu khi mất nguồn", "Giá thành cao"],
        answer: "Không mất dữ liệu khi mất nguồn"
    },
    {
        question: "Nguyên lý của việc ghi dữ liệu trên đĩa cứng là gì?",
        options: ["Các bit 1 và 0 tương ứng với các trạng thái nhiễm từ khác nhau của vật liệu từ", "Các bit 1 và 0 tương ứng với tốc độ di chuyển khác nhau của các điện tử trong vật liệu từ", "Các bit 1 và 0 tương ứng với các giá trị điện áp khác nhau trên vật liệu từ", "Các bit 1 và 0 tương ứng với các momen lực từ khác nhau tác động lên đầu đọc"],
        answer: "Các bit 1 và 0 tương ứng với các trạng thái nhiễm từ khác nhau của vật liệu từ"
    },
    {
        question: "Với đĩa từ, đặc điểm nào trong các đặc điểm sau đây thuộc kỹ thuật ghi mật độ không đều:",
        options: ["Dung lượng của đĩa lớn", "Dung lượng của đĩa nhỏ", "Tất cả các rãnh đều có cùng số cung", "Các rãnh khác nhau có số cung khác nhau"],
        answer: "Các rãnh khác nhau có số cung khác nhau"
    },
    {
        question: "Với đĩa từ, đặc điểm nào trong các đặc điểm sau đây thuộc kỹ thuật ghi mật độ đều:",
        options: ["Dung lượng của đĩa lớn", "Dung lượng của đĩa nhỏ", "Tất cả các rãnh đều có cùng số cung", "Các rãnh khác nhau có số cung khác nhau"],
        answer: "Tất cả các rãnh đều có cùng số cung"
    },
    {
        question: "Mỗi Sector trong đĩa cứng chứa dữ liệu với dung lượng bằng bao nhiêu?",
        options: ["128 Byte", "256 Byte", "512 Byte", "1024 Byte"],
        answer: "512 Byte"
    },
    {
        question: "Tốc độ quay của ổ đĩa cứng có thể lấy giá trị nào trong số các giá trị sau đây?",
        options: ["500 vòng/phút", "5400 vòng/phút", "54000 vòng/phút", "72000 vòng/phút"],
        answer: "5400 vòng/phút"
    },
    {
        question: "Trong các thiết bị lưu trữ dạng từ, giá trị 1 logic và 0 logic khác được phân biệt như thế nào?",
        options: ["Giá trị 1 tương ứng với vật liệu nhựa còn giá trị 0 tương ứng với vật liệu từ tính", "Giá trị 1 tương ứng với trạng thái có từ tính còn giá trị 0 tương ứng với trạng thái không có từ tính", "Giá trị 1 tương ứng với vùng có từ tính mạnh còn giá trị 0 tương ứng với vùng có từ tính yếu", "Giá trị 1 tương ứng trạng thái từ tính với các cực xác định theo một hướng còn giá trị 0 tương ứng với trạng thái từ tính với các cực xác định theo hướng ngược lại"],
        answer: "Giá trị 1 tương ứng trạng thái từ tính với các cực xác định theo một hướng còn giá trị 0 tương ứng với trạng thái từ tính với các cực xác định theo hướng ngược lại"
    },
    {
        question: "Các loại đĩa từ (đĩa cứng và đĩa mềm) trước khi được sử dụng để lưu trữ dữ liệu nó cần phải được:",
        options: ["Từ hóa", "Định dạng", "Khử từ", "Tạo sector"],
        answer: "Định dạng"
    },
    {
        question: "Quá trình đọc thông tin trên đĩa CDROM dựa trên hiện tượng gì?",
        options: ["Sự phản chiếu của các tia laser năng lượng thấp từ lớp lưu trữ dữ liệu", "Sự phản chiếu của các tia laser năng lượng cao từ lớp lưu trữ dữ liệu", "Sự khác nhau về giá trị dòng quang điện khi ánh sáng phản xạ từ lớp lưu trữ dữ liệu", "Sự khác nhau về giá trị dòng quang điện khi ánh sáng phản xạ từ lớp bề mặt đĩa"],
        answer: "Sự phản chiếu của các tia laser năng lượng thấp từ lớp lưu trữ dữ liệu"
    },
    {
        question: "Việc phân biệt các vị trí được khắc trên đĩa CDROM được thực hiện như thế nào?",
        options: ["Đầu đọc có thiết bị dò tìm các vị trí bị khắc hay không bị khắc trên đĩa", "Bộ phận tiếp nhận ánh sáng của thiết bị đọc sẽ nhận biết được những điểm tại đó tia laser bị phản xạ mạnh hay biến mất", "Đầu đọc có thiết bị cảm nhận sự thay đổi dòng quang điện do tia laser tạo ra", "Bộ phận tiếp nhận ánh sáng của thiết bị đọc có khả năng phân biệt các vị trí có vết khắc"],
        answer: "Bộ phận tiếp nhận ánh sáng của thiết bị đọc sẽ nhận biết được những điểm tại đó tia laser bị phản xạ mạnh hay biến mất"
    },
    {
        question: "Khi bộ nhận biết ánh sáng của thiết bị đọc CDROM nhận biết các điểm có vết khắc trên đĩa, các tia phản xạ mạnh tương ứng với:",
        options: ["Điểm khắc lỗ", "Điểm không khắc lỗ", "Điểm không ghi dữ liệu", "Điểm vành ngoài đĩa"],
        answer: "Điểm không khắc lỗ"
    },
    {
        question: "Rãnh trên đĩa CDROM được khắc như thế nào:",
        options: ["Theo một đường xoắn ốc", "Theo các đường tròn đồng tâm", "Theo các hình vuông cùng trọng tâm", "Không theo hình nào trong các hình trên"],
        answer: "Theo một đường xoắn ốc"
    },
    {
        question: "Hãy chỉ ra khẳng định đúng trong các khẳng định sau đây:",
        options: ["Dữ liệu được ghi trên đĩa CD theo từng rãnh (track)", "Dữ liệu được ghi trên đĩa CD theo từng cung (sector)", "Dữ liệu được ghi trên đĩa CD theo từng khối có kích thước bất kỳ", "Dữ liệu được ghi trên đĩa CD theo từng khối có kích thước đồng nhất"],
        answer: "Dữ liệu được ghi trên đĩa CD theo từng khối có kích thước đồng nhất"
    },
    {
        question: "Kích thước của mỗi khối dữ liệu trên đĩa CD là bao nhiêu?",
        options: ["2352 byte", "2212 byte", "2132 byte", "2048 byte"],
        answer: "2048 byte"
    },
    {
        question: "Đặc điểm của đĩa CD-R là gì?",
        options: ["Cho phép ghi dữ liệu nhiều lần", "Không cho phép xóa dữ liệu", "Cho phép ghi dữ liệu một lần", "Dung lượng nhỏ hơn đĩa CDROM"],
        answer: "Cho phép ghi dữ liệu một lần"
    },
    {
        question: "Đặc điểm của đĩa CD-R là gì?",
        options: ["Cho phép ghi và xóa dữ liệu nhiều lần", "Dung lượng lớn gấp đôi đĩa CDROM", "Cho phép ghi và xóa dữ liệu đồng thời", "Dữ liệu không thể bị xóa"],
        answer: "Dữ liệu không thể bị xóa"
    },
    {
        question: "Đặc điểm của đĩa CD-RW là gì?",
        options: ["Cho phép ghi và xóa dữ liệu nhiều lần", "Dung lượng lớn gấp đôi đĩa CD-R", "Cho phép ghi và xóa dữ liệu đồng thời", "Dữ liệu không thể bị xóa"],
        answer: "Cho phép ghi và xóa dữ liệu nhiều lần"
    },
    {
        question: "Chức năng của bộ vi xử lý trong máy tính là gì?",
        options: ["Điều khiển hoạt động của các thiết bị ngoại vi", "Đọc dữ liệu từ bộ nhớ, xử lý theo từng câu lệnh và ghi kết quả vào bộ nhớ hay thiết bị ngoại vi", "Đọc dữ liệu từ các thiết bị ngoại vi và ghi vào bộ nhớ", "Đọc dữ liệu từ các thiết bị ngoại vi và ghi vào bộ nhớ"],
        answer: "Đọc dữ liệu từ bộ nhớ, xử lý theo từng câu lệnh và ghi kết quả vào bộ nhớ hay thiết bị ngoại vi"
    },
    {
        question: "Thành phần nào sau đây không phải là một bộ phận của bộ vi xử lý?",
        options: ["ALU", "CU", "Các thanh ghi", "Bus hệ thống"],
        answer: "Bus hệ thống"
    },
    {
        question: "Khối EU trong bộ vi xử lý gồm các thành phần nào?",
        options: ["ALU, CU và các thanh ghi", "ALU, CU và hàng nhận lệnh", "ALU và hàng nhận lệnh", "ALU và CU"],
        answer: "ALU và CU"
    },
    {
        question: "Chức năng của khối EU trong bộ vi xử lý là gì?",
        options: ["Nhận lệnh", "Thực hiện lệnh", "Giải mã lệnh", "Biên dịch lệnh"],
        answer: "Thực hiện lệnh"
    },
    {
        question: "Bộ vi xử lý 32 bit có:",
        options: ["32 thanh ghi", "32 thiết bị vào ra", "32 Megabyte RAM", "Các thanh ghi và Bus 32 bit"],
        answer: "Các thanh ghi và Bus 32 bit"
    },
    {
        question: "Các bộ vi xử lý kiểu CISC có đặc điểm là:",
        options: ["Có số lượng các lệnh ít hơn so với các bộ vi xử lý kiểu RISC", "Sử dụng nhiều RAM hơn so với các bộ vi xử lý kiểu RISC", "Có tốc độ đồng hồ trung bình", "Sử dụng các lệnh có kích thước khác nhau"],
        answer: "Sử dụng các lệnh có kích thước khác nhau"
    },
    {
        question: "Các bộ vi xử lý kiểu RISC điển hình có đặc điểm là:",
        options: ["Có các bộ nhớ Cache với dung lượng lớn hơn so với các bộ vi xử lý kiểu CISC", "Có ít thanh ghi hơn so với các bộ vi xử lý kiểu CISC", "Kém tin cậy hơn so với các bộ vi xử lý kiểu CISC", "Thường thực hiện mỗi lệnh trong một xung nhịp Clock"],
        answer: "Thường thực hiện mỗi lệnh trong một xung nhịp Clock"
    },
    {
        question: "Khối địa chỉ trong bộ xử lý 80286 được viết tắt là gì?",
        options: ["ALU", "AU", "EU", "IU"],
        answer: "AU"
    },
    {
        question: "Khối thực hiện lệnh trong bộ xử lý 80286 được viết tắt là gì?",
        options: ["ALU", "AU", "EU", "IU"],
        answer: "EU"
    },
    {
        question: "Đơn vị lệnh trong bộ xử lý 80286 được viết tắt là gì?",
        options: ["ALU", "AU", "EU", "IU"],
        answer: "IU"
    },
    {
        question: "Khối tính toán số học-logic trong bộ xử lý 80286 được viết tắt là gì?",
        options: ["ALU", "AU", "EU", "IU"],
        answer: "ALU"
    },
    {
        question: "Trong hệ vi xử lý, đối với bộ xử lý 80286 thì kênh địa chỉ có hướng như thế nào?",
        options: ["Là kênh đường ra", "Là kênh đường vào", "Là kênh hai chiều", "Không cố định, tuỳ thuộc vào cấu trúc của hệ vi xử lý"],
        answer: "Là kênh đường ra"
    },
    {
        question: "Bộ vi xử lý 8086 là bộ vi xử lý bao nhiêu bit?",
        options: ["8 bit", "16 bit", "32 bit", "64 bit"],
        answer: "16 bit"
    },
    {
        question: "Trong hệ vi xử lý, đối với bộ xử lý 80286 thì kênh dữ liệu có hướng như thế nào?",
        options: ["Là kênh đường ra", "Là kênh đường vào", "Là kênh hai chiều", "Không xác định, tuỳ thuộc vào cấu trúc của hệ vi xử lý"],
        answer: "Là kênh hai chiều"
    },
    {
        question: "Trong hệ vi xử lý, đối với bộ xử lý 80286 thì kênh điều khiển có hướng như thế nào?",
        options: ["Là kênh đường ra", "Là kênh đường vào", "Là kênh hai chiều", "Không xác định, tuỳ thuộc vào cấu trúc của hệ vi xử lý"],
        answer: "Là kênh hai chiều"
    },
    {
        question: "Các đường dây MEMR, MEMW trong các máy tính sử dụng bộ vi xử lý 8086/8088 thuộc vào Bus nào?",
        options: ["Bus địa chỉ", "Bus điều khiển", "Bus dữ liệu", "Bus bộ vi xử lý"],
        answer: "Bus điều khiển"
    },
    {
        question: "Bộ phận nào được coi là “bộ não của máy tính?",
        options: ["RAM", "CPU", "ROM", "HDD"],
        answer: "CPU"
    },
    {
        question: "Thiết bị nhập nào sau đây thuộc nhóm thiết bị nhập dữ liệu?",
        options: ["Màn hình", "Loa", "Chuột", "Máy in"],
        answer: "Chuột"
    },
    {
        question: "RAM thuộc loại bộ nhớ:",
        options: ["Bộ nhớ trong", "Bộ nhớ ngoài", "Bộ nhớ phụ trợ", "Bộ nhớ điều khiển"],
        answer: "Bộ nhớ trong"
    },
    {
        question: "Thiết bị nào được dùng để lưu trữ lâu dài dữ liệu?",
        options: ["RAM", "CPU", "ROM", "Ổ cứng"],
        answer: "Ổ cứng"
    },
    {
        question: "Hệ cơ số mà máy tính sử dụng để lưu trữ dữ liệu là:",
        options: ["Thập phân", "Nhị phân", "Thập lục phân", "Bát phân"],
        answer: "Nhị phân"
    },
    {
        question: "Giá trị thập phân của số nhị phân 1010 là:",
        options: ["5", "8", "10", "12"],
        answer: "10"
    },
    {
        question: "Một byte tương ứng với bao nhiêu bit?",
        options: ["4", "8", "16", "32"],
        answer: "8"
    },
    {
        question: "Trong biểu diễn số nguyên có dấu theo dạng bù 2, để lấy số đối ta thực hiện:",
        options: ["Đảo bịt và cộng 1", "Đảo bit", "Cộng 1 vào số ban đầu", "Trừ 1"],
        answer: "Đảo bịt và cộng 1"
    },
    {
        question: "Cổng logic nào cho đầu ra bằng 1 chỉ khi cả hai đầu vào đều bằng 1?",
        options: ["OR", "AND", "XOR", "NAND"],
        answer: "AND"
    },
    {
        question: "Cổng NOT có chức năng:",
        options: ["Nhân logic", "Cộng logic", "Đảo giá trị logic", "Trừ logic"],
        answer: "Đảo giá trị logic"
    },
    {
        question: "Bảng chân lý của cổng OR cho đầu ra bằng 0 khi:",
        options: ["Cả hai ngõ vào đều 0", "Cả hai ngõ vào đều 1", "Một ngõ vào 1, một ngõ vào 0", "Luôn luôn bằng 1"],
        answer: "Cả hai ngõ vào đều 0"
    },
    {
        question: "Cổng NAND cho đầu ra bằng 0 khi:",
        options: ["Một đầu vào bằng 1", "Một đầu vào bằng 0", "Cả hai đầu vào bằng 1", "Cả hai đầu vào bằng 0"],
        answer: "Cả hai đầu vào bằng 1"
    },
    {
        question: "Mạch tuần tự là mạch điện mà đầu ra:",
        options: ["Chỉ phụ thuộc đầu vào hiện tại", "Không phụ thuộc đầu vào", "Phụ thuộc đầu vào và trạng thái trước đó", "Luôn thay đổi ngẫu nhiên"],
        answer: "Phụ thuộc đầu vào và trạng thái trước đó"
    },
    {
        question: "Mạch FF (Flip-Flop) chủ yếu dùng để:",
        options: ["Thực hiện phép cộng", "Lưu trữ 1 bit", "Giải mã địa chỉ", "Điều khiển bus"],
        answer: "Lưu trữ 1 bit"
    },
    {
        question: "Bộ đếm (Counter) thuộc nhóm mạch:",
        options: ["Tổ hợp", "Tuần tự", "Kết hợp", "Giải mã"],
        answer: "Tuần tự"
    },
    {
        question: "Trong kiến trúc máy tính, lệnh máy gồm hai phần chính:",
        options: ["Mã lệnh và địa chỉ kết quả", "Mã lệnh và toán hạng", "Dữ liệu và địa chỉ", "Thanh ghi và ALU"],
        answer: "Mã lệnh và toán hạng"
    },
    {
        question: "Tập lệnh RISC có đặc điểm:",
        options: ["Lệnh phức tạp, nhiều chu kỳ", "Ít lệnh, thực hiện nhanh", "Ít thanh ghi", "Không dùng ALU"],
        answer: "Ít lệnh, thực hiện nhanh"
    },
    {
        question: "Trong mô hình xử lý lệnh, bước đầu tiên là:",
        options: ["Giải mã lệnh", "Đưa kết quả lên bus", "Lấy lệnh từ bộ nhớ", "Thực hiện lệnh"],
        answer: "Lấy lệnh từ bộ nhớ"
    },
    {
        question: "ALU trong CPU dùng để:",
        options: ["Lưu trữ dữ liệu", "Giải mã địa chỉ", "Thực hiện các phép toán số học và logic", "Điều khiển bộ nhớ"],
        answer: "Thực hiện các phép toán số học và logic"
    },
    {
        question: "Thanh ghi PC (Program Counter) có nhiệm vụ:",
        options: ["Lưu trữ dữ liệu", "Đếm số bit của lệnh", "Chỉ đến địa chỉ lệnh kế tiếp", "Lưu trạng thái CPU"],
        answer: "Chỉ đến địa chỉ lệnh kế tiếp"
    },
    {
        question: "Cổng cắm bàn phím của máy tính có thể là:",
        options: ["USB", "HDMI", "MDMI", "VGA"],
        answer: "USB"
    },
    {
        question: "Khi khởi động máy tính, loa tín hiệu phát ra tiếng beep dài liên tục, lỗi do thiết bị nào sau đây?",
        options: ["Mainboard", "CPU", "VGA Card", "RAM"],
        answer: "RAM"
    },
    {
        question: "Màn hình được kết nối với máy tính thông qua cổng nào sau đây?",
        options: ["LPT", "VGA", "Firewire", "COM"],
        answer: "VGA"
    },
    {
        question: "Máy Scanner được kết nối với máy tính thông qua cổng nào sau đây?",
        options: ["USB", "RJ45", "LPT", "RJ11"],
        answer: "USB"
    },
    {
        question: "Thuật ngữ “RAM” là từ viết tắt của cụm từ?",
        options: ["Read Access Memory", "Recent Access Memory", "Random Access Memory", "Read And Modify"],
        answer: "Random Access Memory"
    },
    {
        question: "Các hoạt động của máy tính bao gồm:",
        options: ["Ngắt, Giải mã lệnh, Vào/ra", "Xử lý số liệu, Ngắt, Thực hiện chương trình", "Thực hiện chương trình, ngắt, vào/ra", "Tính kết quả tính toán, Lưu trữ dữ liệu, vào/ra"],
        answer: "Thực hiện chương trình, ngắt, vào/ra"
    },
    {
        question: "Tốc độ truyền dữ liệu tối đa của chuẩn USB 2.0 là?",
        options: ["1.5 Mbps", "12 Mbps", "400 Mbps", "480 Mbps"],
        answer: "480 Mbps"
    },
    {
        question: "Khi lựa chọn cấu hình cho máy tính, thiết bị cần quan tâm đầu tiên là?",
        options: ["CPU", "RAM", "Mainboard", "Monitor"],
        answer: "CPU"
    },
    {
        question: "Máy tính Von Neumann là máy tính:",
        options: ["Tách riêng bộ nhớ lệnh và bộ nhớ dữ liệu.", "Có thể thực hiện nhiều lệnh cùng một lúc", "Thực hiện theo chương trình sẵn có bên trong bộ nhớ", "Tối ưu cho tốc độ, xử lý song song hoặc mô phỏng não"],
        answer: "Thực hiện theo chương trình sẵn có bên trong bộ nhớ"
    },
    {
        question: "Máy tính ENIAC là máy tính:",
        options: ["Do Bộ giáo dục Mỹ đặt hàng", "Là máy tính ra đời vào những năm 1970", "Dùng vi mạch cỡ nhỏ và cỡ vừa", "Là máy tính đầu tiên trên thế giới giới"],
        answer: "Là máy tính đầu tiên trên thế giới giới"
    },
    {
        question: "Những thiết bị nào sau đây được xếp vào nhóm thiết bị nội vi?",
        options: ["Mainboard, CPU, CD-ROM Drive, Mouse", "Mainboard, CPU, CD-ROM Drive, RAM", "HDD, CD-ROM Drive, FDD, Keyboard", "Monitor, Keyboard, Mouse, Scanner"],
        answer: "Mainboard, CPU, CD-ROM Drive, RAM"
    },
    {
        question: "Máy tính Von Neumann là máy tính:",
        options: ["Chỉ có 01 bộ xử lý, thực hiện các lệnh tuần tự", "Có thể thực hiện nhiều lệnh cùng một lúc", "Tách riêng bộ nhớ lệnh và bộ nhớ dữ liệu.", "Tối ưu cho tốc độ, xử lý song song hoặc mô phỏng não"],
        answer: "Chỉ có 01 bộ xử lý, thực hiện các lệnh tuần tự"
    },
    {
        question: "Cho đến nay, máy tính đã phát triển qua:",
        options: ["5 thế hệ", "4 thế hệ", "3 thế hệ", "2 thế hệ"],
        answer: "5 thế hệ"
    },
    {
        question: "Trong các giai đoạn phát triển của máy tính, phát biểu nào sau đây là đúng:",
        options: ["Thế hệ thứ nhất dùng bóng bán dẫn", "Thế hệ thứ ba dùng bóng bán dẫn", "Thế hệ thứ nhất dùng đèn điện tử chân không", "Thế hệ thứ tư được sử dụng bởi SSI và MSI"],
        answer: "Thế hệ thứ nhất dùng đèn điện tử chân không"
    },
    {
        question: "Trong các giai đoạn phát triển của máy tính, phát biểu nào sau đây là sai:",
        options: ["Thế hệ thứ nhất dùng đèn điện tử chân không", "Thế hệ thứ hai dùng bóng bán dẫn", "Thế hệ thứ ba dùng bóng bán dẫn", "Thế hệ thứ tư dùng VLSI"],
        answer: "Thế hệ thứ ba dùng bóng bán dẫn"
    },
    {
        question: "Theo cách phân loại hiện đại, có các loại máy tính sau đây:",
        options: ["Máy tính để bàn, máy tính lớn, máy tính nhúng", "Máy tính để bàn, máy chủ, máy tính nhúng", "Máy chủ, máy tính mini, máy tính lớn", "Máy tính mini, máy tính nhúng, siêu máy tính"],
        answer: "Máy tính để bàn, máy chủ, máy tính nhúng"
    },
    {
        question: "Hệ thống Bus dùng để làm gì?",
        options: ["Nối các bộ phận của máy tính lại với nhau", "Nối CPU và bộ nhớ ngoài", "Nối bộ nhớ ngoài và bộ nhớ trong", "Nối bộ xử lý với các bộ phận bên ngoài"],
        answer: "Nối các bộ phận của máy tính lại với nhau"
    },
    {
        question: "USB viết tắt của cụm từ:",
        options: ["Universal Serial Bus", "Universal System Bus", "Unique Serial Bus", "Unique System Bus"],
        answer: "Universal Serial Bus"
    },
    {
        question: "Cho biết thành phần không được gọi là phần cứng máy tính:",
        options: ["Quạt", "Đĩa quang", "Bộ nhớ", "Tín hiệu điện"],
        answer: "Tín hiệu điện"
    },
    {
        question: "Chọn tên của phần mềm ứng dụng:",
        options: ["Unikey", "Windows XP", "Java", "Norton Ghost"],
        answer: "Unikey"
    },
    {
        question: "Hãng máy tính giới thiệu chip 2 nhân đầu:",
        options: ["Hãng máy tính HP", "Hãng máy tính Compaq", "Hãng máy tính Intel", "Hãng máy tính IBM"],
        answer: "Hãng máy tính Intel"
    },
    {
        question: "Công nghệ 2 nhân cho phép:",
        options: ["Tạo 2 CPU thảo luận", "Chỉ tạo 1 CPU với tốc độ tăng gấp 4 lần", "Tạo 2 CPU vật lý", "Tạo 2 CPU: 1 CPU vật lý và 1 CPU luận lý"],
        answer: "Tạo 2 CPU vật lý"
    },
    {
        question: "Tại sao bộ nhớ trong máy tính được gọi là bộ nhớ truy cập ngẫu nhiên?",
        options: ["Giá trị các ô nhớ là ngẫu nhiên", "Thời gian truy cập vào một ô nhớ bất kỳ là như nhau", "Bộ nhớ bao gồm các mô-đun có thứ tự sắp xếp ngẫu nhiên", "Thời gian truy cập vào một ô nhớ bất kỳ là ngẫu nhiên"],
        answer: "Thời gian truy cập vào một ô nhớ bất kỳ là như nhau"
    },
    {
        question: "Cổng giao tiếp màn hình đang được sử dụng phổ biến hiện nay:",
        options: ["HDMI", "AGP", "DVI", "DisplayPort"],
        answer: "HDMI"
    },
    {
        question: "Việc đầu tiên sau khi đã lắp ráp xong phần cứng máy tính ta cần phải làm gì?",
        options: ["Cài đặt Hệ điều hành", "Cài phần mềm kế toán", "Cài chương trình nghe nhạc", "Cài Microsoft Office"],
        answer: "Cài đặt Hệ điều hành"
    },
    {
        question: "Mainboard là gì?",
        options: ["Bộ nhớ chính của máy tính", "Bộ xử lý trung tâm", "Bảng mạch chính", "Bộ nhớ truy cập ngẫu nhiên"],
        answer: "Bảng mạch chính"
    },
    {
        question: "Case của máy PC là?",
        options: ["Mạch chính của máy tính", "Một tên gọi khác của ổ cứng", "Thùng máy", "Gần giống với máy in"],
        answer: "Thùng máy"
    },
    {
        question: "Tốc độ xử lý của CPU trong hệ thống máy tính được đo bằng đơn vị nào?",
        options: ["MHz", "F", "Megabyte", "Gigabyte"],
        answer: "MHz"
    },
    {
        question: "Giai đoạn 1980-Nay là thế hệ của:",
        options: ["Máy tính dùng đèn điện tử", "Máy tính dùng mạch tích hợp VLSI", "Máy tính dùng transistor", "Máy tính cơ học"],
        answer: "Máy tính dùng mạch tích hợp VLSI"
    },
    {
        question: "Trong các thiết bị xuất (Output Devices) thì thiết bị xuất chuẩn là?",
        options: ["Printer", "Projector", "Monitor", "Speaker"],
        answer: "Monitor"
    },
    {
        question: "Thiết bị lưu trữ nào sau đây có thể Đọc – Ghi – Xóa nhiều lần?",
        options: ["Hard Disk", "DVD-ROM", "CD-ROM", "CPU"],
        answer: "Hard Disk"
    },
    {
        question: "Để máy tính hoạt động tốt thì các thiết bị phải?",
        options: ["Cùng hãng sản xuất", "Cùng thời gian chế tạo", "Cần đồng bộ", "Là thiết bị mới sản xuất"],
        answer: "Cần đồng bộ"
    },
    {
        question: "Net Card là thiết bị dùng để?",
        options: ["Kết xuất âm thanh", "Kết nối mạng", "Kết xuất ra màn hình", "Kết xuất ra máy in"],
        answer: "Kết nối mạng"
    },
    {
        question: "Siêu máy tính Titan có thể xử lý được:",
        options: ["20 triệu tỷ phép tính/giây", "20 tỷ phép tính/giây", "20 triệu phép tính/giây", "20 phép tính/giây"],
        answer: "20 triệu tỷ phép tính/giây"
    },
    {
        question: "Tần số Bus được đặc trưng cho:",
        options: ["Tốc độ điều khiển các thành phần của máy tính", "Tốc độ truyền dữ liệu trên Bus", "Tốc độ phân phối tài nguyên trong máy tính", "Tốc độ cấp phát bộ nhớ cho các thành phần trong máy tính"],
        answer: "Tốc độ truyền dữ liệu trên Bus"
    },
    {
        question: "Trong chuẩn IEEE 754/85, dạng đơn (single) có độ dài:",
        options: ["16 bit", "128 bit", "32 bit", "64 bit"],
        answer: "32 bit"
    },
    {
        question: "Trong chuẩn IEEE 754/85, dạng kép (double) có độ dài:",
        options: ["64 bit", "80 bit", "32 bit", "128 bit"],
        answer: "64 bit"
    },
    {
        question: "Máy tính thực hiện phép toán nào dưới đây:",
        options: ["Phép cộng", "Phép nhân", "Phép chia", "Phép trừ"],
        answer: "Phép cộng"
    },
    {
        question: "Phát biểu nào sau đây là đúng về bộ điều khiển của máy tính:",
        options: ["Điều khiển hoạt động của bộ nhớ", "Điều khiển các lệnh trong chương trình", "Điều khiển các quá trình bên ngoài", "Điều khiển các phần mềm"],
        answer: "Điều khiển các lệnh trong chương trình"
    },
    {
        question: "Chuột quang hoạt động dựa trên nguyên lý nào?",
        options: ["Cảm biến điện trở", "Cảm biến điện dung", "Theo dõi bề mặt bằng ánh sáng phản xạ", "Tự cảm điện từ"],
        answer: "Theo dõi bề mặt bằng ánh sáng phản xạ"
    },
    {
        question: "Lượng thông tin được đo bằng đơn vị nào?",
        options: ["Mps", "Bit", "Hz", "Hertz"],
        answer: "Bit"
    },
    {
        question: "Hệ nhị phân có bao nhiêu chữ số?",
        options: ["1", "2", "8", "10"],
        answer: "2"
    },
    {
        question: "Hệ thập phân sử dụng bao nhiêu chữ số?",
        options: ["2", "8", "10", "16"],
        answer: "10"
    },
    {
        question: "Hệ thập lục phân có bao nhiêu ký tự?",
        options: ["8", "10", "12", "16"],
        answer: "16"
    },
    {
        question: "Trong hệ thập lục phân, ký tự A tương ứng với giá trị nào?",
        options: ["9", "10", "11", "12"],
        answer: "10"
    },
    {
        question: "1 bit có thể biểu diễn bao nhiêu trạng thái?",
        options: ["1", "2", "4", "8"],
        answer: "2"
    },
    {
        question: "BCD dùng bao nhiêu bit để mã hoá một chữ số thập phân?",
        options: ["2", "4", "8", "16"],
        answer: "4"
    },
    {
        question: "Tín hiệu nhị phân trong máy tính dùng hai mức điện thế tương ứng với:",
        options: ["0 và 2", "2 và 5", "0 và 1", "-1 và 1"],
        answer: "0 và 1"
    },
    {
        question: "Số 15 ở hệ thập lục phân được biểu diễn bằng ký tự:",
        options: ["A", "D", "E", "F"],
        answer: "F"
    },
    {
        question: "Bù 1 của số nhị phân được tính bằng cách:",
        options: ["Cộng 1", "Đảo bit", "Dịch trái", "Dịch phải"],
        answer: "Đảo bit"
    },
    {
        question: "Bù 2 của một số nhị phân là:",
        options: ["Bù 1 + 1", "Bù 1 − 1", "Đổi dấu", "Dịch trái hai bit"],
        answer: "Bù 1 + 1"
    },
    {
        question: "Cổng nào cho kết quả bằng 1 khi hai đầu vào giống nhau?",
        options: ["AND", "OR", "NOT", "XOR"],
        answer: "AND"
    },
    {
        question: "Cổng nào cho kết quả bằng 1 khi hai đầu vào khác nhau?",
        options: ["AND", "OR", "NOT", "XOR"],
        answer: "XOR"
    },
    {
        question: "Karnaugh map 3 biến có bao nhiêu ô?",
        options: ["4", "6", "8", "16"],
        answer: "8"
    },
    {
        question: "Trong nửa bộ cộng (Half Adder), tổng (Sum) được tạo bởi cổng:",
        options: ["AND", "OR", "XOR", "NAND"],
        answer: "XOR"
    },
    {
        question: "Bản đồ Karnaugh gom nhóm 4 ô giúp loại bỏ bao nhiêu biến?",
        options: ["0", "1", "2", "3"],
        answer: "2"
    },
    {
        question: "Bộ cộng đầy đủ (Full Adder) có bao nhiêu ngõ vào?",
        options: ["1", "2", "3", "4"],
        answer: "3"
    },
    {
        question: "Lệnh OR thực hiện:",
        options: ["Nhân logic", "Cộng logic", "Đảo bit", "Xóa bit"],
        answer: "Cộng logic"
    },
    {
        question: "Lệnh NOT thực hiện:",
        options: ["Nhân logic", "Cộng logic", "Đảo bit", "Xóa bit"],
        answer: "Đảo bit"
    },
    {
        question: "Bản đồ Karnaugh 4 biến có bao nhiêu ô?",
        options: ["8", "12", "16", "32"],
        answer: "16"
    },
    {
        question: "ALU là bộ phận thực hiện:",
        options: ["Lưu trữ dữ liệu", "Các phép toán số học và logic", "Giải mã lệnh", "Điều khiển xung clock"],
        answer: "Các phép toán số học và logic"
    },
    {
        question: "Dùng K-map, gom nhóm 8 ô giúp loại bỏ:",
        options: ["1 biến", "2 biến", "3 biến", "4 biến"],
        answer: "3 biến"
    },
    {
        question: "Trong phép cộng bù 2, overflow xảy ra khi:",
        options: ["Hai số âm cho ra số âm", "Hai số dương cho ra số dương", "Hai số cùng dấu cho ra kết quả khác dấu", "Hai số khác dấu cho ra số âm"],
        answer: "Hai số cùng dấu cho ra kết quả khác dấu"
    },
    {
        question: "Với IEEE-754 single precision, dạng số chuẩn hóa có phân mũ lưu trữ bằng:",
        options: ["e + 127", "e − 127", "2^(e + 127)", "2^(e − 127)"],
        answer: "e + 127"
    },
    {
        question: "Bit đầu tiên trong số chấm động 32-bit là gì?",
        options: ["Bit kiểm tra", "Bit mũ", "Bit dấu (0: dương, 1: âm)", "Bit làm tròn"],
        answer: "Bit dấu (0: dương, 1: âm)"
    },
    {
        question: "Phần định trị của biểu diễn số thực 32 bit là bao nhiêu bit?",
        options: ["10", "20", "23", "24"],
        answer: "23"
    },
    {
        question: "Khi hai số cùng dấu mà kết quả ra dấu khác → điều gì xảy ra?",
        options: ["Underflow", "Lỗi làm tròn", "Tràn (overflow)", "Không có vấn đề gì"],
        answer: "Tràn (overflow)"
    },
    {
        question: "Số âm trong của biểu diễn số thực được biểu diễn bằng cách:",
        options: ["Đảo toàn bộ bit", "Bit dấu bằng 1", "Lấy bù 2", "Lấy bù 1"],
        answer: "Bit dấu bằng 1"
    },
    {
        question: "Trong chuẩn IEEE 754 dạng đơn (single precision 32 bit), phần mũ (exponent) có độ dài bao nhiêu bit?",
        options: ["8 bit", "10 bit", "23 bit", "52 bit"],
        answer: "8 bit"
    },
    {
        question: "Với chuẩn đơn (single precision), giá trị bias của phần mũ là:",
        options: ["127", "128", "64", "32"],
        answer: "127"
    },
    {
        question: "Tính 6 bit: 010101 + 001011",
        options: ["011111", "100000", "011000", "010010"],
        answer: "011111"
    },
    {
        question: "Tính 8 bit bù 2: 11100100 + 00011100",
        options: ["00000000", "00000001", "11100000", "11110000"],
        answer: "00000000"
    },
    {
        question: "Giá trị thập phân của số bù 2 8 bit: 11011000",
        options: ["–40", "–38", "–8", "–24"],
        answer: "–40"
    },
    {
        question: "Tính phép trừ nhị phân 6 bit: 101100 – 000111",
        options: ["100101", "101101", "100010", "110101"],
        answer: "100010"
    },
    {
        question: "Trong 7 bit bù 2, kết quả của 0101101 + 0010101 là:",
        options: ["1000010 (không overflow)", "1000010 (overflow)", "0111010", "1111010"],
        answer: "1000010 (overflow)"
    },
    {
        question: "Chuyển –12 sang 6 bit bù 2",
        options: ["111010", "110100", "111100", "110011"],
        answer: "111010"
    },
    {
        question: "Tính: 001101 + 111011 (6 bit bù 2)",
        options: ["001000", "000111", "000100", "111000"],
        answer: "001000"
    },
    {
        question: "Với 8 bit bù 2, phép tính 01011100 – 00011000 cho kết quả:",
        options: ["01000100", "00110000", "01001000", "10000100"],
        answer: "01000100"
    },
    {
        question: "Tính 8 bit: 10011010 + 11100010",
        options: ["01111100", "10000000", "01100100", "10111100"],
        answer: "01100100"
    },
    {
        question: "Thực hiện phép cộng BCD: 9 + 7",
        options: ["0001 0110", "0000 1110", "0001 0000", "0001 0100"],
        answer: "0001 0110"
    },
    {
        question: "Cho hai BCD: 0101 (5) và 0111 (7). Kết quả BCD của 5 + 7 là:",
        options: ["0001 0000", "0001 0010", "0000 1100", "0010 0010"],
        answer: "0001 0010"
    },
    {
        question: "Giá trị thập phân của số BCD: 0101 1001 0011",
        options: ["593", "591", "493", "590"],
        answer: "593"
    },
    {
        question: "Trường hợp nào dưới đây không phải là mã BCD hợp lệ?",
        options: ["0100", "1001", "1010", "0110"],
        answer: "1010"
    },
    {
        question: "Thực hiện cộng BCD: 38 + 47",
        options: ["1000 0101", "0110 0101", "0101 0101", "1000 0100"],
        answer: "1000 0101"
    },
    {
        question: "Chuyển số thập phân 276 sang BCD",
        options: ["0010 0111 0110", "0010 0110 0111", "0100 0110 0111", "0010 0011 0110"],
        answer: "0010 0111 0110"
    },
    {
        question: "Dùng số bù 2 trên 8 bit, tính: (–34) + (–45). Kết quả đúng là:",
        options: ["1001 0111", "1101 0011", "1010 1111", "0110 1100"],
        answer: "1010 1111"
    },
    {
        question: "Dùng 8 bit bù 2, tính: (–50) + 26 .",
        options: ["1100 1110", "1110 0000", "1111 0010", "1101 1110"],
        answer: "1110 0000"
    },
    {
        question: "Dùng 8 bit bù 2: (–5) + (–123) gây ra điều gì?",
        options: ["Kết quả hợp lệ", "Tràn số", "Sai dấu", "Không thay đổi"],
        answer: "Tràn số"
    },
    {
        question: "Dùng 8 bit bù 2: 30 – (–90) = ?",
        options: ["0110 1000", "0100 0000", "0111 1000", "1001 1000"],
        answer: "0111 1000"
    },
    {
        question: "Số thực 0.15625 trong IEEE 754 single có phần định trị bắt đầu bằng:",
        options: ["001010000000…", "010100000000…", "010000000000…", "100100000000…"],
        answer: "010100000000…"
    },
    {
        question: "Điều kiện của overflow trong phép cộng số bù 2 là gì?",
        options: ["Bit nhớ cuối = 1", "Hai số âm cho ra số âm", "Hai số dương cho ra số âm hoặc ngược lại", "Hai số khác dấu luôn tràn"],
        answer: "Hai số dương cho ra số âm hoặc ngược lại"
    },
    {
        question: "ALU tính A – B bằng cách nào?",
        options: ["A + B", "A + (NOT B)", "A + (NOT B + 1)", "A XOR B"],
        answer: "A + (NOT B + 1)"
    },
    {
        question: "Với hàm 4 biến F có nhóm các ô (12, 13, 14, 15). Dạng biểu thức tối thiểu của nhóm này là:",
        options: ["AB", "A'B", "AB'", "AB'C"],
        answer: "AB"
    },
    {
        question: "Cho K-map 3 biến với nhóm 4 ô bao gồm (0,1,2,3). Biểu thức tương đương là:",
        options: ["A'", "B'", "C'", "A'B'"],
        answer: "A'"
    },
    {
        question: "Cho hàm F(A,B,C) = Σm(1,3,5,6,7). Dạng tối thiểu theo K-map là:",
        options: ["A + BC", "B + AC", "AB + C", "A + B"],
        answer: "A + BC"
    },
    {
        question: "Rút gọn biểu thức sau bằng đại số Boolean: F = A’B + AB + AB’. Kết quả nào sau đây đúng?",
        options: ["A’ + B", "A + B'", "A + B", "A"],
        answer: "A + B"
    },
    {
        question: "Cho biểu thức: F = AB + A'B + AB'. Rút gọn F = ?",
        options: ["A + B", "A + B'", "A’ + B", "A"],
        answer: "A + B"
    },
    {
        question: "Rút gọn biểu thức bằng K-map: F(A,B,C) = Σ(1,3,5,7)",
        options: ["B + C", "B'C + BC'", "A + C", "BC"],
        answer: "B'C + BC'"
    },
    {
        question: "Rút gọn biểu thức: F = (A + B)(A + C)(A + B')",
        options: ["A + BC", "A", "A + C", "A + B"],
        answer: "A + C"
    },
    {
        question: "K-map của F(A,B,C,D) = Σ(1,3,5,7,9,11,13,15). Rút gọn F = ?",
        options: ["B + D", "A", "C + D", "B"],
        answer: "D"
    }
];

// --- HÀM JAVASCRIPT CÒN LẠI (VỀ LOGIC ỨNG DỤNG) GIỮ NGUYÊN NHƯ PHIÊN BẢN TRƯỚC ---
// (Bao gồm các hàm shuffleArray, setupInitialView, startQuiz, loadQuestion, updateProgressBar,
// handleAnswerSelection, showResultView, showView, resetQuiz)
// ...