package com.dao;

import com.entity.HunligongsiCollectionEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.view.HunligongsiCollectionView;

/**
 * 婚礼公司收藏 Dao 接口
 *
 * @author 
 */
public interface HunligongsiCollectionDao extends BaseMapper<HunligongsiCollectionEntity> {

   List<HunligongsiCollectionView> selectListView(Pagination page,@Param("params")Map<String,Object> params);

}
