import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#263D94',
  },
  fixedHeader: {
    backgroundColor: '#263D94',
    paddingHorizontal: 20,
    paddingTop: 0,
    paddingBottom: 20,
  },
  scrollableContent: {
    flex: 1,
    backgroundColor: '#263D94',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,

  },
  notificationIcon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIcon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  articlesTitle: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 30,
  },
  featuredArticle: {
    backgroundColor: '#4E8FF6',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    height:139
  },
  featuredArticleContent: {
    flex: 1,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  articleDescription: {
    fontSize: 14,
    color: '#E2E8F0',
    lineHeight: 20,
  },
  featuredArticleIcon: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#263D94',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 48,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#7C90ED',
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#FFFFFF',
  },
  filterButton: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#4E8FF6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesContainer: {
    paddingRight: 20,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4E8FF6',
    borderRadius: 9,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 12,
    minHeight: 36,
  },

  categoryIcon: {
    marginRight: 6,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  exercisesContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 100,
  },
  exerciseRow: {
    justifyContent: 'space-between',
  },
  exerciseCard: {
    borderRadius: 16,
    marginBottom: 20,
    width: '48%',
  },
  exerciseImage: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
  exerciseImagePlaceholder: {
    width: '100%',
    height: 140,
    borderRadius: 16,
    marginBottom: 12,
    backgroundColor: '#4E8FF6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  exerciseTextContainer: {
    width: '100%',
    paddingHorizontal: 4,
  },
  exerciseTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
    textAlign: 'left',
  },
  exerciseDescription: {
    fontSize: 12,
    color: '#B8D4F1',
    textAlign: 'left',
    lineHeight: 16,
  },
}); 