import { StyleSheet, Dimensions, Image } from 'react-native';
import { ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* 프로필 카드 섹션 */}
      <ThemedView style={styles.profileCard}>
        <ThemedView style={styles.profileHeader}>
          <Image
            source={require('@/assets/images/react-logo.png')}
            style={styles.profileImage}
          />
          <ThemedView style={styles.profileInfo}>
            <ThemedText type="title">김탐험</ThemedText>
            <ThemedText style={styles.levelText}>탐험가 Lv.5</ThemedText>
            <ThemedView style={styles.progressBar}>
              <ThemedView style={[styles.progress, { width: '60%' }]} />
            </ThemedView>
          </ThemedView>
        </ThemedView>
        <ThemedView style={styles.achievementRow}>
          <ThemedView style={styles.achievementItem}>
            <ThemedText type="title">12</ThemedText>
            <ThemedText style={styles.achievementLabel}>발견</ThemedText>
          </ThemedView>
          <ThemedView style={styles.divider} />
          <ThemedView style={styles.achievementItem}>
            <ThemedText type="title">45</ThemedText>
            <ThemedText style={styles.achievementLabel}>수집</ThemedText>
          </ThemedView>
          <ThemedView style={styles.divider} />
          <ThemedView style={styles.achievementItem}>
            <ThemedText type="title">3km</ThemedText>
            <ThemedText style={styles.achievementLabel}>거리</ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>

      {/* 최근 발견 섹션 */}
      <ThemedView style={styles.section}>
        <ThemedView style={styles.sectionHeader}>
          <ThemedText type="subtitle">최근 발견</ThemedText>
          <ThemedText style={styles.seeAll}>전체보기</ThemedText>
        </ThemedView>
        <ThemedView style={styles.cardGrid}>
          <ThemedView style={styles.discoveryCard}>
            <Image
              source={require('@/assets/images/react-logo.png')}
              style={styles.discoveryImage}
            />
            <ThemedView style={styles.discoveryInfo}>
              <ThemedText type="defaultSemiBold">경복궁 근정전</ThemedText>
              <ThemedText style={styles.discoveryMeta}>10분 전</ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedView style={styles.discoveryCard}>
            <Image
              source={require('@/assets/images/react-logo.png')}
              style={styles.discoveryImage}
            />
            <ThemedView style={styles.discoveryInfo}>
              <ThemedText type="defaultSemiBold">해치상</ThemedText>
              <ThemedText style={styles.discoveryMeta}>30분 전</ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </ThemedView>

      {/* 주변 탐색 섹션 */}
      <ThemedView style={styles.section}>
        <ThemedView style={styles.sectionHeader}>
          <ThemedText type="subtitle">주변 탐색</ThemedText>
          <ThemedText style={styles.seeAll}>지도보기</ThemedText>
        </ThemedView>
        <ThemedView style={styles.nearbyList}>
          <ThemedView style={styles.nearbyItem}>
            <Image
              source={require('@/assets/images/react-logo.png')}
              style={styles.nearbyImage}
            />
            <ThemedView style={styles.nearbyInfo}>
              <ThemedText type="defaultSemiBold">경회루</ThemedText>
              <ThemedText style={styles.nearbyMeta}>200m • 5분</ThemedText>
            </ThemedView>
            <ThemedView style={styles.nearbyBadge}>
              <ThemedText style={styles.badgeText}>NEW</ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </ThemedView>

      {/* 추천 코스 섹션 */}
      <ThemedView style={styles.section}>
        <ThemedView style={styles.sectionHeader}>
          <ThemedText type="subtitle">추천 코스</ThemedText>
        </ThemedView>
        <ThemedView style={styles.courseCard}>
          <Image
            source={require('@/assets/images/react-logo.png')}
            style={styles.courseImage}
          />
          <ThemedView style={styles.courseInfo}>
            <ThemedText type="defaultSemiBold">고궁 산책로</ThemedText>
            <ThemedText style={styles.courseMeta}>2시간 코스 • 8개 장소</ThemedText>
            <ThemedView style={styles.tagContainer}>
              <ThemedView style={styles.tag}>
                <ThemedText style={styles.tagText}>문화유산</ThemedText>
              </ThemedView>
              <ThemedView style={styles.tag}>
                <ThemedText style={styles.tagText}>포토스팟</ThemedText>
              </ThemedView>
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
    margin: 16,
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  profileHeader: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 16,
    borderWidth: 3,
    borderColor: '#4DABF7',
  },
  profileInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  levelText: {
    color: '#4DABF7',
    marginTop: 4,
    fontSize: 16,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#E9ECEF',
    borderRadius: 3,
    marginTop: 8,
  },
  progress: {
    height: '100%',
    backgroundColor: '#4DABF7',
    borderRadius: 3,
  },
  achievementRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#E9ECEF',
  },
  achievementItem: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#F8F9FA',
    padding: 12,
    borderRadius: 12,
  },
  achievementLabel: {
    color: '#868E96',
    marginTop: 4,
    fontSize: 13,
  },
  divider: {
    width: 1,
    backgroundColor: '#E9ECEF',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  seeAll: {
    color: '#4DABF7',
    fontWeight: '600',
  },
  cardGrid: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 12,
  },
  discoveryCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  discoveryImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  discoveryInfo: {
    padding: 12,
  },
  discoveryMeta: {
    color: '#868E96',
    fontSize: 12,
    marginTop: 4,
  },
  nearbyList: {
    paddingHorizontal: 16,
  },
  nearbyItem: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    marginBottom: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  nearbyImage: {
    width: 56,
    height: 56,
    borderRadius: 12,
    marginRight: 12,
  },
  nearbyInfo: {
    flex: 1,
  },
  nearbyMeta: {
    color: '#868E96',
    fontSize: 13,
    marginTop: 4,
  },
  nearbyBadge: {
    backgroundColor: '#4DABF7',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  courseCard: {
    margin: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  courseImage: {
    width: '100%',
    height: 180,
  },
  courseInfo: {
    padding: 16,
  },
  courseMeta: {
    color: '#868E96',
    marginTop: 4,
    fontSize: 14,
  },
  tagContainer: {
    flexDirection: 'row',
    marginTop: 12,
    gap: 8,
  },
  tag: {
    backgroundColor: '#E7F5FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  tagText: {
    color: '#4DABF7',
    fontSize: 12,
    fontWeight: '600',
  },
});