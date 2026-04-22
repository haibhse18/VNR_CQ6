import './App.css'
import b52BiBanHa from './image/b52bibanha.jpg'
import cachMangCaNuoc from './image/cach mang ca nuoc.jpg'
import dienBienPhuTrenKhong from './image/dienbienphutrenkhong.jpg'
import haiMienVietNam from './image/2 mien vietnam.png'
import hiepDinhParis from './image/hiepdinhparis.jpg'
import keHoachVietNamHoa from './image/kehoachvietnamhoachientranh.jpg'

const phaseOneResults = [
  'Ở miền Nam: Đập tan các cuộc phản công mùa khô của Mỹ và chính quyền Sài Gòn.',
  'Đỉnh cao là Tổng tiến công và nổi dậy Tết Mậu Thân 1968, giáng đòn mạnh vào ý chí xâm lược của Mỹ.',
  'Mỹ buộc phải “phi Mỹ hóa” chiến tranh, ngừng ném bom miền Bắc và chấp nhận đàm phán tại Paris.',
  'Ở miền Bắc: Đánh bại chiến tranh phá hoại lần thứ nhất, bảo vệ vững chắc hậu phương và chi viện tối đa cho tiền tuyến miền Nam.',
]

const phaseTwoProcess = [
  'Quân và dân ta liên tiếp đánh bại các cuộc hành quân lớn của địch trong chiến lược “Việt Nam hóa chiến tranh”.',
  'Năm 1972, chiến thắng “Điện Biên Phủ trên không” đập tan cuộc tập kích B-52 của Mỹ trong 12 ngày đêm.',
  'Thắng lợi này buộc Mỹ ký Hiệp định Paris (1/1973), rút toàn bộ quân Mỹ về nước: “Đánh cho Mỹ cút”.',
  'Nắm bắt thời cơ chiến lược, Đảng mở Tổng tiến công và nổi dậy Mùa Xuân 1975 qua 3 chiến dịch: Tây Nguyên, Huế - Đà Nẵng, Hồ Chí Minh.',
]

const meanings = [
  {
    title: 'Đối với dân tộc',
    detail:
      'Kết thúc thắng lợi 21 năm kháng chiến chống Mỹ và 30 năm chiến tranh giải phóng dân tộc, hoàn thành cách mạng dân tộc dân chủ nhân dân, thống nhất đất nước; đưa cả nước bước vào kỷ nguyên độc lập, tự do và đi lên chủ nghĩa xã hội.',
  },
  {
    title: 'Đối với quốc tế',
    detail:
      'Đánh bại cuộc chiến tranh xâm lược thực dân kiểu mới quy mô lớn nhất sau Thế chiến II, làm suy yếu hệ thống đế quốc chủ nghĩa và cổ vũ mạnh mẽ phong trào giải phóng dân tộc trên toàn thế giới.',
  },
]

const lessons = [
  'Giương cao ngọn cờ độc lập dân tộc và chủ nghĩa xã hội, kết hợp sức mạnh của cả hai miền trong một chiến lược thống nhất.',
  'Tin tưởng và dựa vào sức mạnh của nhân dân, phát huy cao độ khối đại đoàn kết toàn dân tộc.',
  'Phát huy sức mạnh hậu phương miền Bắc vững mạnh toàn diện, bảo đảm chi viện quyết định cho miền Nam.',
  'Vận dụng sáng tạo phương pháp cách mạng: kết hợp chặt chẽ quân sự - chính trị - ngoại giao, thắng từng bước để tiến tới thắng lợi hoàn toàn.',
  'Tăng cường vai trò lãnh đạo của Đảng, giữ vững tinh thần độc lập, tự chủ trong hoạch định đường lối chiến lược.',
]

const giantOpponentLessons = [
  'Nghệ thuật đánh vào ý chí thay vì đối đầu hỏa lực: Tết Mậu Thân 1968 lựa chọn đúng thời điểm bất ngờ (đêm giao thừa), đúng không gian bất ngờ (đô thị, cơ quan đầu não), tạo cú sốc chiến lược vượt xa giá trị thuần túy quân sự.',
  'Hiệu ứng tâm lý chiến lược của Mậu Thân: dù tương quan lực lượng chưa nghiêng hẳn về ta, cuộc tổng tiến công đã làm thay đổi nhận thức của dư luận Mỹ, làm lộ rõ mâu thuẫn giữa tuyên bố chính trị và thực tế chiến trường.',
  'Nghệ thuật biến công nghệ cũ thành năng lực mới: trong chiến dịch 12 ngày đêm 1972, lực lượng phòng không ta cải tiến phương pháp phát hiện và bám bắt mục tiêu B-52 trong nhiễu dày đặc, thể hiện tư duy sáng tạo chiến thuật.',
  'Bài học từ Điện Biên Phủ trên không: công cụ không tự tạo sức mạnh; năng lực tổ chức, huấn luyện, phối hợp và bản lĩnh của con người mới quyết định hiệu quả tác chiến.',
  'Chiến tranh nhân dân và sức mạnh mạng lưới: liên kết hậu phương miền Bắc với tiền tuyến miền Nam, kết hợp quân sự, chính trị, ngoại giao (đỉnh cao là Hiệp định Paris) để làm phân tán và bào mòn lợi thế tập trung của đối phương.',
  'Kết luận lý thuyết: “Lấy thế thắng lực” là nghệ thuật tạo ưu thế tương đối bằng trí tuệ, nhịp độ và thế trận nhiều tầng, chứ không phải đọ số lượng vũ khí.',
]

const practicalApplications = [
  'Trong khởi nghiệp, doanh nghiệp nhỏ không nên chọn chiến lược đốt vốn để đối đầu trực diện với tập đoàn lớn; hướng phù hợp là định vị ngách rõ, giải quyết một nỗi đau cụ thể mà thị trường đại trà đang bỏ trống.',
  'Mô hình “lấy nhanh thắng chậm”: dùng vòng lặp ngắn (nghiên cứu khách hàng - thử nghiệm - cải tiến), ra quyết định dựa dữ liệu thực tế, thay vì quy trình phê duyệt dài và cứng.',
  'Lấy linh hoạt thắng cồng kềnh: đội ngũ tinh gọn có thể cá nhân hóa trải nghiệm khách hàng, đổi tính năng nhanh theo phản hồi, từ đó tạo mức độ gắn kết cao hơn nhóm khách hàng mục tiêu.',
  'Tư duy “đại dương xanh”: thay vì cạnh tranh giá ở thị trường đỏ, cần tái cấu trúc giá trị sản phẩm để mở không gian cạnh tranh mới, nơi đối thủ lớn chưa tối ưu nguồn lực.',
  'Trong học tập và phát triển nghề nghiệp, người có xuất phát điểm thấp hơn vẫn có thể tạo “thế” bằng hồ sơ năng lực thực chiến: dự án thật, năng lực giải quyết vấn đề, khả năng làm việc dưới áp lực.',
  'Trong tuyển dụng, ứng viên có năng lực thực thi, tư duy học liên tục và thái độ chủ động thường có lợi thế bền vững hơn người chỉ có lợi thế bằng cấp nếu không chuyển hóa được thành kết quả.',
]

const threeTFramework = [
  'TRÍ - Nhận diện điểm mù: phân tích hệ thống để tìm “tử huyệt” của đối thủ hoặc của hoàn cảnh; nơi họ tự tin nhất thường là nơi ít được phòng bị nhất.',
  'TRÍ - Tạo bất ngờ chiến lược: không lặp lại cách chơi quen thuộc của đối thủ; ưu tiên đòn đánh bất đối xứng về thời điểm, không gian, thông điệp và nhịp độ.',
  'THẾ - Chơi cuộc chơi dài hạn: không nóng vội thắng lớn ngay; xây lộ trình theo chặng, đo tiến bộ định kỳ và tích lũy các chiến thắng nhỏ để tạo chuyển hóa về chất.',
  'THẾ - Tái đầu tư liên tục: mỗi kết quả đạt được phải quay lại nuôi năng lực lõi (kiến thức, quy trình, đội ngũ, công cụ) để lợi thế tăng theo thời gian.',
  'TÂM - Giữ tinh thần thép: khi tài nguyên hao hụt, yếu tố giữ con người ở lại đường đua là kỷ luật nội tâm, niềm tin mục tiêu và khả năng tự phục hồi sau thất bại.',
  'TÂM - Kết nối để khuếch đại sức mạnh: xây mạng lưới cộng tác, cố vấn và đồng minh; không cá nhân hóa toàn bộ cuộc chiến mà chuyển thành thế trận hợp lực.',
]

const davidGoliathPerspective = [
  'Trong thời đại mới, “gã khổng lồ” có thể là tập đoàn lớn, áp lực tài chính, kỳ vọng xã hội hoặc một bài toán vượt quá năng lực hiện tại của bản thân.',
  'Rào cản quyết định thường nằm ở tâm lý: nỗi sợ thất bại khiến nhiều người thu hẹp mục tiêu và tự thua ngay từ trong tư duy trước khi hành động.',
  'Khi chênh lệch nguồn lực quá lớn, tư duy đối đầu trực diện thường dẫn đến tiêu hao; tư duy hiệu quả hơn là xác định lại mục tiêu, điểm đánh và tiêu chí thắng lợi.',
  'Quy luật bù trừ cho thấy: vốn, công nghệ, quy mô có giới hạn; trong khi sáng tạo, tổ chức, kỷ luật và ý chí có thể tích lũy theo cấp số cộng rồi cấp số nhân.',
  'Do đó, câu hỏi cốt lõi không chỉ là “làm sao thắng trong luật chơi sẵn có”, mà là “làm sao thiết kế luật chơi mới để triệt tiêu ưu thế mặc định của đối thủ”.',
]

function App() {
  return (
    <div className="presentation">
      <header className="hero-slide" id="mo-dau">
        <p className="kicker">LỊCH SỬ ĐẢNG CỘNG SẢN VIỆT NAM / CHƯƠNG 2</p>
        <h1>Chương 2: Đảng lãnh đạo cách mạng cả nước (1954 - 1975)</h1>
        <p className="subtitle">
          Tổng hợp nội dung trọng tâm theo chuẩn kiến thức giáo trình, nhấn mạnh
          giai đoạn 1965 - 1975 với hai chặng chiến lược: chống “Chiến tranh cục
          bộ” và chống “Việt Nam hóa chiến tranh”.
        </p>
        <dl className="hero-meta">
          <div>
            <dt>TRỌNG TÂM</dt>
            <dd>1965 - 1975</dd>
          </div>
          <div>
            <dt>3 MẶT TRẬN</dt>
            <dd>Quân sự / Chính trị / Ngoại giao</dd>
          </div>
          <div>
            <dt>KẾT QUẢ</dt>
            <dd>Giải phóng miền Nam, thống nhất đất nước</dd>
          </div>
        </dl>
        <nav className="topic-nav" aria-label="Điều hướng nhanh nội dung">
          <a href="#tong-quan">Tổng quan</a>
          <a href="#chien-tranh-cuc-bo">Chiến tranh cục bộ</a>
          <a href="#viet-nam-hoa-va-dai-thang">Việt Nam hóa và đại thắng</a>
          <a href="#y-nghia-va-bai-hoc">Ý nghĩa và bài học</a>
          <a href="#chu-de-bo-sung">Chủ đề bổ sung</a>
          <a href="#ket-luan">Kết luận</a>
        </nav>
      </header>

      <main>
        <section className="slide" id="tong-quan">
          <p className="section-code">
            <kbd>SEC 02</kbd> <samp>[ TỔNG QUAN CHIẾN LƯỢC ]</samp>
          </p>
          <h2>2. Lãnh đạo cách mạng cả nước (1965 - 1975)</h2>
          <p>
            Giai đoạn này được chia thành hai phần gắn với sự thay đổi chiến lược
            chiến tranh của đế quốc Mỹ: từ “Chiến tranh cục bộ” (1965 - 1968) sang
            “Việt Nam hóa chiến tranh” (1969 - 1975).
          </p>
          <div className="image-grid two">
            <figure>
              <img src={haiMienVietNam} alt="Bản đồ Việt Nam trong bối cảnh đất nước tạm thời chia cắt hai miền" />
              <figcaption>Bối cảnh chiến lược của cách mạng Việt Nam sau 1954.</figcaption>
            </figure>
            <figure>
              <img src={cachMangCaNuoc} alt="Tư liệu lịch sử về cách mạng cả nước giai đoạn 1965 đến 1975" />
              <figcaption>Cách mạng cả nước dưới sự lãnh đạo thống nhất của Đảng.</figcaption>
            </figure>
          </div>
        </section>

        <section className="slide split" id="chien-tranh-cuc-bo">
          <article className="card-block">
            <p className="section-code">
              <kbd>PHẦN 1</kbd> <samp>[ CHIẾN TRANH CỤC BỘ ]</samp>
            </p>
            <h2>Phần 1: Chống “Chiến tranh cục bộ” (1965 - 1968)</h2>
            <h3>Bối cảnh</h3>
            <p>
              Sau thất bại trong “Chiến tranh đặc biệt”, Mỹ ồ ạt đưa quân viễn chinh
              vào miền Nam và dùng không quân, hải quân đánh phá miền Bắc.
            </p>

            <h3>Chủ trương của Đảng</h3>
            <p>
              Tại Hội nghị Trung ương 11 và 12 (1965), Đảng nêu cao quyết tâm chiến
              lược: “Kiên quyết đánh bại cuộc chiến tranh xâm lược của đế quốc Mỹ
              trong bất kỳ tình huống nào”, đồng thời chỉ đạo kết hợp chặt chẽ đấu
              tranh quân sự, chính trị và ngoại giao.
            </p>

            <h3>Kết quả tiêu biểu</h3>
            <ul>
              {phaseOneResults.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="card-block image-stack">
            <figure>
              <img src={keHoachVietNamHoa} alt="Lãnh đạo Mỹ trình bày kế hoạch chiến tranh tại Việt Nam" />
              <figcaption>Sự chuyển dịch chiến lược chiến tranh của Mỹ qua từng thời kỳ.</figcaption>
            </figure>
            <figure>
              <img src={dienBienPhuTrenKhong} alt="Lực lượng phòng không Việt Nam trong chiến đấu" />
              <figcaption>Thế trận đánh trả kiên cường của quân và dân ta trên cả hai miền.</figcaption>
            </figure>
          </article>
        </section>

        <section className="slide split" id="viet-nam-hoa-va-dai-thang">
          <article className="card-block">
            <p className="section-code">
              <kbd>PHẦN 2</kbd> <samp>[ VIỆT NAM HÓA CHIẾN TRANH ]</samp>
            </p>
            <h2>Phần 2: Chống “Việt Nam hóa chiến tranh” và Đại thắng Mùa Xuân</h2>
            <h3>Bối cảnh</h3>
            <p>
              Mỹ rút dần quân viễn chinh, tăng cường quân đội Sài Gòn với âm mưu
              “dùng người Việt đánh người Việt”.
            </p>

            <h3>Quá trình đấu tranh (1969 - 1975)</h3>
            <ul>
              {phaseTwoProcess.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3>Đại thắng Mùa Xuân 1975</h3>
            <p>
              Sau Hội nghị TW 21 (1973), Đảng quyết định mở Tổng tiến công và nổi
              dậy Mùa Xuân 1975. Qua ba đòn chiến lược: Tây Nguyên, Huế - Đà Nẵng
              và Hồ Chí Minh, quân ta giải phóng hoàn toàn miền Nam, thống nhất đất
              nước: “Đánh cho ngụy nhào”.
            </p>
          </article>

          <article className="card-block image-stack">
            <figure>
              <img src={b52BiBanHa} alt="Xác máy bay B-52 bị bắn rơi" />
              <figcaption>Chiến thắng trên bầu trời tạo bước ngoặt chiến lược.</figcaption>
            </figure>
            <figure>
              <img src={hiepDinhParis} alt="Lễ ký Hiệp định Paris năm 1973" />
              <figcaption>Hiệp định Paris 1973: bước ngoặt “Đánh cho Mỹ cút”.</figcaption>
            </figure>
          </article>
        </section>

        <section className="slide split" id="y-nghia-va-bai-hoc">
          <article className="card-block">
            <p className="section-code">
              <kbd>MỤC 3</kbd> <samp>[ Ý NGHĨA LỊCH SỬ ]</samp>
            </p>
            <h2>3. Ý nghĩa lịch sử (1954 - 1975)</h2>
            {meanings.map((item) => (
              <div key={item.title} className="meaning-item">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </article>

          <article className="card-block">
            <p className="section-code">
              <kbd>LESSONS</kbd> <samp>[ KINH NGHIỆM LÃNH ĐẠO ]</samp>
            </p>
            <h2>Kinh nghiệm lãnh đạo (Bài học lịch sử)</h2>
            <ul>
              {lessons.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="slide closing" id="ket-luan">
          <h2>Kết luận</h2>
          <p>
            Thắng lợi giai đoạn 1954 - 1975 là minh chứng tiêu biểu cho bản lĩnh,
            trí tuệ và năng lực lãnh đạo của Đảng trong chiến tranh cách mạng hiện
            đại. Đây là nền tảng lý luận và thực tiễn quan trọng để vận dụng vào sự
            nghiệp xây dựng và bảo vệ Tổ quốc trong thời kỳ mới.
          </p>
          <p className="closing-note">
            “Độc lập dân tộc gắn liền với chủ nghĩa xã hội là sợi chỉ đỏ xuyên suốt.”
          </p>
        </section>

        <section className="slide closing" id="chu-de-bo-sung">
          <p className="section-code">
            <kbd>TOPIC+</kbd> <samp>[ BẢN BỔ SUNG CHUYÊN SÂU ]</samp>
          </p>
          <h2>
            CHỦ ĐỀ: Một nước Việt Nam chống lại đế quốc hùng mạnh - bài học về lấy thế thắng lực và tinh thần quyết thắng
          </h2>
          <p>
            Góc nhìn hiện đại cho thấy rào cản lớn nhất trước các “gã khổng lồ” không chỉ là thiếu nguồn lực, mà là tâm lý sợ hãi ngay từ đầu.
            Nguồn lực vật chất luôn hữu hạn, còn khả năng sáng tạo và ý chí con người là không giới hạn. Vấn đề cốt lõi là định nghĩa lại luật
            chơi để buộc đối thủ rời khỏi vùng mạnh nhất của họ.
          </p>

          <div className="deep-stack">
            <article className="card-block">
              <h3>1. Đặt vấn đề: Hiệu ứng David và Goliath trong thời đại mới</h3>
              <p>
                Mục này làm rõ bản chất của “thế yếu” trong bối cảnh hiện đại và
                lý do vì sao tâm lý, tư duy chiến lược và khả năng tái định nghĩa
                cuộc chơi quan trọng không kém nguồn lực ban đầu.
              </p>
              <ul>
                {davidGoliathPerspective.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="card-block">
              <h3>2. Cơ sở lý thuyết: Giải mã nghệ thuật “Lấy thế thắng lực” (1965 - 1975)</h3>
              <p>
                Các dẫn chứng lịch sử dưới đây cho thấy Đảng đã lựa chọn đúng điểm
                đột phá để chuyển bất lợi về vật chất thành ưu thế về thế trận,
                ý chí và tính chính nghĩa.
              </p>
              <ul>
                {giantOpponentLessons.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="card-block">
              <h3>3. Cơ sở vận dụng: Thuật toán đối đầu với “Gã khổng lồ” trong thực tiễn</h3>
              <p>
                Từ bài học lịch sử, có thể chuyển hóa thành mô hình hành động cụ
                thể cho doanh nghiệp nhỏ, người đi làm và người học trong môi trường
                cạnh tranh bất cân xứng.
              </p>
              <ul>
                {practicalApplications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="card-block">
              <h3>4. Giải pháp và bài học: Nguyên tắc hành động 3T (Trí - Thế - Tâm)</h3>
              <p>
                Khung 3T là bộ nguyên tắc có thể áp dụng trực tiếp vào học tập,
                công việc và khởi nghiệp để đi đường dài trước những thử thách lớn.
              </p>
              <ul>
                {threeTFramework.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <p className="closing-note final-thesis">
            Kẻ mạnh không phải lúc nào cũng thắng; người chiến thắng mới là kẻ mạnh thực sự. Di sản 1954 - 1975 khẳng định: khi có mục tiêu
            chính nghĩa, chiến lược tạo thế khôn ngoan và tinh thần không khuất phục, mọi giới hạn về nguồn lực đều có thể bị phá vỡ.
          </p>
        </section>
      </main>
    </div>
  )
}

export default App
